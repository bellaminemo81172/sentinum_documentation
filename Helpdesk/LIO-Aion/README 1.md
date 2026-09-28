# Aion Module — Configuration Guide

## What Aion does

Aion connects a Sentos device to one of two types of field equipment:

| Product variant | Use case | Channels / ports | What is sent |
|-----------------|----------|------------------|--------------|
| **4–20 mA** (standard) | Conventional analogue transmitters such as level, pressure, flow, or temperature sensors | Two independent input channels | Loop current, configured measuring range, alarm/status, and device temperature |
| **IO-Link** | One smart IO-Link sensor or actuator | One IO-Link master port | The device identity and the sensor's raw process data |

The selected variant is fixed when the firmware is built. It is not possible to turn a 4–20 mA unit into an IO-Link unit by changing a remote setting.

## Configuration at a glance

There are two places to configure Aion:

1. **Build/product configuration** determines the hardware variant and the initial settings included in a firmware image. It is normally set by the product or firmware team before delivery.
2. **Device configuration** is the writable `aion` resource tree. It can be changed in the field through the normal Sentos configuration channel. These settings are retained by the Config Module.

For a typical 4–20 mA order, collect:

1. The interface: **two 4–20 mA inputs** or **one IO-Link port**.
2. For each analogue channel, the real-world value at **4 mA** and at **20 mA**, including the unit—for example, `0 … 10 bar` or `-20 … 80 °C`.
3. The measurement and routine reporting interval.
4. Any high alarm limit, reset margin, and significant-change reporting amount.
5. The customer-facing numeric device identifier, when required by the backend.

## Build and product parameters

These parameters apply when firmware is produced; they are not ordinary field settings. Values labelled **initial field default** become the starting value of the corresponding writable device setting in a new configuration.

### Module operation and engineering parameters

| Parameter | Default | Allowed values | Sales explanation |
|-----------|---------|----------------|-------------------|
| `CONFIG_SENTOS_MODULE_AION` | off | on / off | Includes Aion in the product firmware. It must be on for an Aion product. For the 4–20 mA version it also brings in the Sentos service and internal-temperature service. |
| `CONFIG_SENTOS_AION_INTERFACE_CURRENT_LOOP` | on | exactly one interface option | Selects the standard two-channel 4–20 mA product. |
| `CONFIG_SENTOS_AION_INTERFACE_IO_LINK` | off | exactly one interface option | Selects the single-port IO-Link master product and includes the IO-Link stack. |
| `CONFIG_SENTOS_AION_MODULE_STACK_SIZE` | 2048 | 1024…32768 bytes | Internal firmware working memory reserved for Aion. Leave at the default unless instructed by firmware engineering. It does not increase sensor capacity. |
| `CONFIG_SENTOS_AION_MODULE_PRIORITY` | 5 | -32…31 | Internal scheduling priority. Leave at the default; it is not a measurement or reporting priority. |
| `CONFIG_AION_MODULE_LOG_LEVEL` | platform default | Off, Error, Warning, Info, Debug | Amount of diagnostic information recorded by the firmware. Use Info for normal commissioning and Debug only when engineering requests it, as Debug can create many logs. It does not alter readings or alarms. |
| `CONFIG_SENTOS_AION_INDICATORS` | on when supported by the board | on / off | Enables the board's optional RGB status indicators. It is available only on boards declaring the Aion indicator hardware. Green indicates an active measurement (or IO-Link sensor availability); blue indicates connection activity. |

### IO-Link startup parameter

This parameter is relevant only to the IO-Link variant.

| Parameter | Default | Allowed values | Sales explanation |
|-----------|---------|----------------|-------------------|
| `CONFIG_SENTOS_AION_IO_LINK_STARTUP_TIMEOUT_MS` | 5000 ms | 1000…30000 ms | Time Aion waits at startup for the first valid sensor process-data sample. Aion reports as soon as data arrives. If the sensor is absent or slow, it makes one fallback measurement after this time so startup is never held indefinitely. Use the default unless the connected sensor has a known slow startup. |

### Initial field defaults

The following build parameters supply the initial values of the device settings listed later. The `*_CENTI` parameters store hundredths of a unit: `400` means `4.00`, `-125` means `-1.25`, and `1000` means `10.00`.

| Build parameter | Default | Initial field setting | Sales explanation |
|-----------------|---------|-----------------------|-------------------|
| `CONFIG_SENTOS_AION_MEAS_PERIOD` | 5 min | `aion/timing/period` | Regular measurement interval. |
| `CONFIG_SENTOS_AION_SEND_EVERY` | 1 | `aion/timing/every` | Number of measurements between routine keep-alive reports. |
| `CONFIG_SENTOS_AION_LOWER_CH1_CENTI` | 0.00 | `aion/config/lower1` | Channel 1 real-world value at 4 mA. |
| `CONFIG_SENTOS_AION_LOWER_CH2_CENTI` | 0.00 | `aion/config/lower2` | Channel 2 real-world value at 4 mA. |
| `CONFIG_SENTOS_AION_UPPER_CH1_CENTI` | 10.00 | `aion/config/upper1` | Channel 1 real-world value at 20 mA. |
| `CONFIG_SENTOS_AION_UPPER_CH2_CENTI` | 10.00 | `aion/config/upper2` | Channel 2 real-world value at 20 mA. |
| `CONFIG_SENTOS_AION_ALARM_THR_CH1_CENTI` | 0.00 | `aion/config/thr1` | Channel 1 alarm limit; zero disables that alarm. |
| `CONFIG_SENTOS_AION_ALARM_THR_CH2_CENTI` | 0.00 | `aion/config/thr2` | Channel 2 alarm limit; zero disables that alarm. |
| `CONFIG_SENTOS_AION_ALARM_HYST_CH1_CENTI` | 0.00 | `aion/config/hyst1` | Channel 1 alarm reset margin. |
| `CONFIG_SENTOS_AION_ALARM_HYST_CH2_CENTI` | 0.00 | `aion/config/hyst2` | Channel 2 alarm reset margin. |
| `CONFIG_SENTOS_AION_DELTA_CH1_CENTI` | 4.00 | `aion/config/delta1` | Channel 1 change required to send an additional report; zero disables it. |
| `CONFIG_SENTOS_AION_DELTA_CH2_CENTI` | 4.00 | `aion/config/delta2` | Channel 2 change required to send an additional report; zero disables it. |
| `CONFIG_SENTOS_AION_CONFIG_ID` | 0 | `aion/config/id` | Customer or installation identifier carried with analogue telemetry. |

## Field configuration: all writable settings

The root resource is `aion`. `timing` and `trigger` are available on both variants. `config` exists only on the 4–20 mA variant. Changing `period` or `every` restarts the measurement schedule using the new timing.

### Reporting timing — `aion/timing`

| Setting | ID | Default | Range | Meaning for the customer |
|---------|----|---------|-------|--------------------------|
| `period` | 0 | 5 min | 1…660 min | How often Aion takes a regular measurement. A shorter period provides fresher information but usually increases radio traffic and energy use. |
| `every` | 1 | 1 measurement | 1…24 | Routine report interval expressed in measurements. `1` sends every regular measurement; `6` with a 10-minute period sends a normal report at least every 60 minutes. Alarms, relevant changes, and manual uplink triggers can send earlier. |

### Analogue scaling, alarms, and report-by-exception — `aion/config`

This group is present only on the two-channel 4–20 mA variant. All values are in the customer's **engineering unit**: bar, °C, %, litres, and so on. Aion does not store the unit name, so it must be recorded in the sales/order and backend configuration.

| Setting | ID | Default | Range | Meaning for the customer |
|---------|----|---------|-------|--------------------------|
| `lower1` | 7 | 0.0 | -100000…100000 | Channel 1 value represented by 4 mA. |
| `upper1` | 0 | 10.0 | -100000…100000 | Channel 1 value represented by 20 mA. |
| `lower2` | 8 | 0.0 | -100000…100000 | Channel 2 value represented by 4 mA. |
| `upper2` | 1 | 10.0 | -100000…100000 | Channel 2 value represented by 20 mA. |
| `thr1` | 2 | 0.0 (off) | -100000…100000 | Channel 1 high alarm limit. A value of exactly `0` disables alarm evaluation, so a high alarm at zero cannot be configured with the current product behaviour. |
| `thr2` | 3 | 0.0 (off) | -100000…100000 | Channel 2 high alarm limit; `0` disables it. |
| `hyst1` | 4 | 0.0 | 0…100000 | Channel 1 reset margin. It prevents repeated alarm/recovery messages when a value moves around the limit. |
| `hyst2` | 5 | 0.0 | 0…100000 | Channel 2 reset margin. |
| `delta1` | 9 | 4.0 | 0…100000 | Channel 1 significant-change amount. A non-zero value causes an earlier report when the scaled value changes by at least this amount since the previous uplink. `0` turns this feature off. |
| `delta2` | 10 | 4.0 | 0…100000 | Channel 2 significant-change amount; `0` turns it off. |
| `id` | 6 | 0 | 0…255 | Customer-assigned device/configuration ID. Use it to distinguish installations or probes when the backend requires a compact numeric identifier. It is copied into analogue telemetry. |

#### Scaling example

For a pressure transmitter rated 0…10 bar, set `lowerN = 0` and `upperN = 10`. Then 4 mA means 0 bar, 12 mA means 5 bar, and 20 mA means 10 bar. Aion uses:

$$\text{value} = \text{lowerN} + \frac{\text{current in mA} - 4}{16} \times (\text{upperN} - \text{lowerN})$$

Negative and reversed ranges are permitted when required by the sensor. For example, set `lowerN = -20` and `upperN = 80` for a -20…80 °C transmitter.

For valid signals Aion limits the transmitted current to 4…20 mA before scaling. Fault states retain their diagnostic current, except a disconnected or hardware-fault channel, which reports 0 mA.

#### Alarm and delta examples

* **Tank high alarm at 8.0 m with a 0.2 m reset margin:** set `thrN = 8.0` and `hystN = 0.2`. The alarm appears at 8.0 m or higher and clears only below 7.8 m.
* **Report a meaningful 0.5 bar movement:** set `deltaN = 0.5`. The first valid value establishes the baseline without causing an extra report. Subsequent reports are triggered when the absolute change reaches 0.5 bar.
* **No alarm or change report:** set `thrN = 0` and `deltaN = 0`. Routine reporting still follows `period` and `every`.

### Manual measurement — `aion/trigger/measure`

| Setting | ID | Input | Meaning for the customer |
|---------|----|-------|--------------------------|
| `measure` | 1 | Two-byte big-endian command | Requests an immediate measurement. Command `0x0001` sends the result to the uplink and the connected local app. Any other two-byte value performs a local measurement for the connected app only. This is useful for commissioning and troubleshooting; it does not change the recurring schedule. |

## Read-only information sent by Aion

These resources cannot be configured. They are included here so sales and support can explain what a customer will see in the backend.

### 4–20 mA telemetry — `aion/telemetry`

| Field | ID | Customer meaning |
|-------|----|------------------|
| `val1`, `val2` | 0, 1 | Measured loop current for channels 1 and 2, in mA. Valid readings are limited to 4…20 mA. |
| `alarm` | 2 | Alarm flags: bit 0 is channel 1 and bit 1 is channel 2. |
| `status` | 3 | Condition of each channel; see status table below. |
| `id` | 4 | Copy of configured `config/id`. |
| `upper1`, `upper2` | 5, 6 | Applied 20 mA scale limits. |
| `lower1`, `lower2` | 7, 8 | Applied 4 mA scale limits. |
| `temperature` | 9 | Internal device temperature in °C, not the connected process temperature. |

| Status value | Name | Customer interpretation |
|--------------|------|-------------------------|
| 0 | `ok` | The channel has a valid loop signal. |
| 1 | `not_connected` | Current is below 0.5 mA; no sensor/open loop. This is normal for an intentionally unused channel. |
| 2 | `faulty` | Current is 0.5…3.8 mA; likely sensor under-range or fault. |
| 3 | `overcurrent` | Current is at least 20.5 mA; likely over-range or short condition. |
| 4 | `hw_fault` | Aion could not read the ADC. |

The `status` field packs channel 1 in bits 0…2 and channel 2 in bits 3…5. An alarm or any condition other than `ok` and `not_connected` causes an immediate uplink notification.

### IO-Link telemetry — `aion/io_telemetry`

| Field | ID | Capacity / range | Customer meaning |
|-------|----|------------------|------------------|
| `pdin` | 0 | 0…32 bytes | Latest raw process data from the IO-Link device. Its interpretation depends on the connected sensor and its IODD. |
| `pdout` | 1 | 0…32 bytes | Current raw process-output data served by the IO-Link master. |
| `vendor_id` | 2 | 0…65535 | IO-Link vendor identity of the connected device. |
| `device_id` | 3 | 0…16777215 | IO-Link device identity of the connected device. |

If the IO-Link port has no connected device, Aion clears both process-data fields and sets both identifiers to zero. IO-Link process data is forwarded as raw bytes; a customer-specific backend decoder is needed to turn it into units such as distance, pressure, or switch state.

## Uplink behaviour and payload notes

* A regular measurement happens every `period` minutes.
* A normal keep-alive uplink happens at least every `every` measurements.
* For 4–20 mA, an alarm, a sensor fault, or a configured delta change can send data early. For IO-Link, the routine/triggered schedule applies; raw process data does not currently have a configurable change threshold.
* A local-only manual trigger updates the connected user application but does not send an uplink. An uplink manual trigger does both.
* The module variant is part of the telemetry header. Backends must use the 4–20 mA decoder for the analogue variant and treat IO-Link process data as sensor-specific raw data.

The included decoder files provide the current LPWAN integration examples:

| File | Purpose |
|------|---------|
| `decoders/aion_decoder.js` | Generic current-loop and IO-Link payload decoder. |
| `decoders/aion_thingsboard_decoder.js` | MIOTY/ThingsBoard decoder. |
| `decoders/aion_lora_dataconverter_ttn.js` | LoRa/TTN converter. |

The 4–20 mA LPWAN payload carries the customer ID, internal temperature, alarm and status flags, both loop currents, and both configured scale limits. Numeric values are encoded at 0.01 resolution. The IO-Link payload contains the standard Sentos header followed by an IO-Link legacy frame containing device identity and available raw process data.

## Important commercial limitations

* Aion supports **two analogue inputs or one IO-Link port**, not both in the same firmware image.
* The analogue alarm is a **high alarm only**. Its zero value is reserved for “disabled.”
* The analogue unit name is not transmitted by Aion. Ensure the configured range and unit are documented in the order and backend.
* IO-Link values are not automatically converted into engineering units. The connected device's IODD or an agreed decoder is required for presentation.
* The current cellular/nRF Cloud Aion encoder has no supported JSON telemetry schema. Do not promise an Aion cellular JSON integration without confirming the backend work with engineering.
