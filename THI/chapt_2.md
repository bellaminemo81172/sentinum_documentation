# CHAPTER 2 – INTERNET OF THINGS (IoT): TECHNOLOGICAL FOUNDATION

When discussing the Internet of Things (IoT), many still imagine a specialized domain: industrial machines, technical experts operating complex systems, or devices hidden inside high-tech environments. In reality, IoT has expanded far beyond these early associations and is quietly integrating into almost every aspect of daily life. By 2030, more than 39 billion devices will be connected worldwide, capable of communicating with one another and continuously learning from their environments (Statista, 2024).

Cities use sensors in waste-management containers to optimize collection routes, weather stations detect early storm indicators, and environmental monitors track air quality patterns. Within homes, compact IoT devices register air quality, electricity consumption and humidity levels. Everyday objects are no longer passive utilities; they have become active participants in digital ecosystems.

What does IoT truly signify beyond the buzzword, and how does it create value in practice? This chapter examines the definitions, technological structure and agricultural applications of IoT.

---

## **2.2 Internet of Things (IoT): Technological Background**

### **2.2.1 Definition and Concept of IoT**

The Internet of Things has become one of the most influential concepts in digital transformation, yet it remains difficult to define precisely. Engineers focus on technical infrastructure, business strategists emphasize value creation, and information systems scholars examine organizational implications (Atzori et al., 2010). This reflects IoT's interdisciplinary nature—sitting at the intersection of computer science, telecommunications and business management. Academic discussions typically distinguish between two perspectives: a technical view centered on how IoT systems work, and a business view focused on what they enable organizations to achieve.

#### **Technical Perspective**

From a technical standpoint, IoT creates an environment where physical objects communicate autonomously through digital networks. Atzori and colleagues describe it as a network of interconnected devices equipped with sensors, embedded software, actuators and communication interfaces enabling real-time interaction (Atzori et al., 2010). These devices typically share practical constraints: small size, limited processing power, restricted energy sources and mobility requirements. These constraints demand energy-efficient designs, especially for devices operating continuously in remote locations (Bandyopadhyay and Sen, 2011).

Miorandi and colleagues provide a comprehensive definition: IoT is a system architecture built on diverse networked devices with unique identifiers, standardized protocols and interoperable data formats allowing secure integration into global information networks (Miorandi et al., 2012). Critically, IoT is not a single technology but an architectural framework bringing together sensors, RFID, embedded systems and wireless communication (Al-Fuqaha et al., 2015).

#### **Business-Oriented Perspective**

The business perspective takes a different approach, shifting attention from how the technology works to what it accomplishes. Here, IoT is seen not just as a collection of connected devices but as a systematic way to generate useful knowledge. By continuously monitoring physical conditions, operational activities or user behaviors, IoT systems create streams of information that can guide strategic decisions, improve operational efficiency and create new business opportunities. Porter and Heppelmann capture this view when they describe IoT as the foundation for "smart, connected products" that deliver value through monitoring, control, optimization and autonomous operation (Porter and Heppelmann, 2015).

The business value of IoTshifts from how the technology works to what it accomplishes. IoT is seen as a systematic way to generate actionable knowledge from continuous monitoring of physical conditions, operations or behaviors. Porter and Heppelmann describe IoT as enabling "smart, connected products" that deliver value through monitoring, control, optimization and autonomous operation (Porter and Heppelmann, 2015).

Business value rests on three capabilities that translate into concrete advantages. **Real-time visibility** provides immediate operational awareness, reducing the need for physical inspections and enabling faster problem resolution. **Automation** handles routine decisions consistently, freeing human resources for strategic tasks while lowering labor costs. **Predictive capabilities** use historical patterns to anticipate problems, shifting management from reactive to proactive and improving system reliability (Gubbi et al., 2013). Together, these capabilities enable cost reduction through efficient resource use, risk mitigation through early problem detection, and performance gains through data-driven optimization impossible to achieve through experience alone (Lee and Lee, 2015). Industries from manufacturing to agriculture have demonstrated measurable returns from IoT adoption (Tzounis et al., 2017)

To understand what makes IoT distinctive, it helps to compare it with older automation approaches. Traditional automated systems typically use isolated sensors with local control logic. Measurements trigger predetermined responses within a limited operational scope (Xu et al., 2014). A conventional thermostat illustrates this model well: it measures temperature and activates heating or cooling based on fixed thresholds, but it operates independently without knowing anything about broader system conditions, historical patterns or external weather. When data gets collected at all, it usually happens manually and periodically, which limits opportunities for improvement.

IoT systems work differently because they are built on **network interconnectivity**. Multiple devices share data through common communication infrastructure, enabling coordinated responses and centralized intelligence (Miorandi et al., 2012). Sensors at different locations send measurements to cloud-based platforms where sophisticated analytics can identify patterns, spot anomalies and generate recommendations based on system-wide conditions rather than isolated readings. This architecture enables capabilities that traditional automation simply cannot match: remote monitoring eliminates the need for physical presence, historical analysis reveals optimization opportunities, and predictive algorithms can identify problems before they fully develop (Zanella et al., 2014).

What distinguishes IoT from older automation becomes clear through an agricultural example. Consider traditional irrigation scheduling: a farmer sets timers based on general recommendations or personal experience, applies water uniformly across entire fields, and discovers problems—failed equipment, insufficient moisture, or water waste—only through physical inspection or visible crop stress. Data, if recorded at all, remains in handwritten notebooks with limited analytical value (Xu et al., 2014).

An IoT-enabled system operates fundamentally differently through **network interconnectivity**. Soil moisture sensors at multiple field locations continuously transmit measurements to cloud platforms where analytics identify spatial patterns, detect anomalies and generate irrigation recommendations based on actual crop needs rather than fixed schedules. The system can automatically adjust water application by zone, alert farmers to equipment failures immediately, and build historical datasets revealing which practices optimize yield (Miorandi et al., 2012; Zanella et al., 2014).

This architectural shift addresses practical barriers that limited traditional automation: wireless communication eliminates wiring costs, cloud computing removes local data management burdens, and affordable sensors make dense monitoring networks economically viable from small farms to commercial-scale operation

However, realizing these benefits requires more than just installing sensors and establishing network connectivity. IoT delivers its full potential only when systems are thoughtfully designed to integrate sensing, communication, data management and user interaction into coherent architectures matched to specific operational needs. The next section examines these core architectural components and how they function within working IoT systems.

Understanding IoT requires both perspectives. Technically, it is an architecture of interconnected objects that sense, communicate and act across distributed networks. Strategically, it transforms data into actionable knowledge enabling better operations and decisions (Gubbi et al., 2013). Realizing these benefits demands thoughtful system design integrating sensing, communication, data management and user interaction into coherent architectures. The next section examines these core component

AL-FUQAHA, A., GUIZANI, M., MOHAMMADI, M., ALEDHARI, M. and AYYASH, M., 2015.
Internet of Things: A survey on enabling technologies, protocols, and applications. *IEEE Communications Surveys & Tutorials* [online], 17(4), pp. 2347-2376.
Available at: https://doi.org/10.1109/COMST.2015.2444095 
Accessed: 28 January 2026.

ATZORI, L., IERA, A. and MORABITO, G., 2010.
The Internet of Things: A survey. *Computer Networks* [online], 54(15), pp. 2787-2805.
Available at: https://doi.org/10.1016/j.comnet.2010.05.010
Accessed: 15 January 2026.

BANDYOPADHYAY, D. and SEN, J., 2011.
Internet of Things: Applications and challenges in technology and standardization. *Wireless Personal Communications* [online], 58(1), pp. 49-69.
Available at: https://doi.org/10.1007/s11277-011-0288-5
Accessed: 22 January 2026.

GUBBI, J., BUYYA, R., MARUSIC, S. and PALANISWAMI, M., 2013.
Internet of Things (IoT): A vision, architectural elements, and future directions. *Future Generation Computer Systems* [online], 29(7), pp. 1645-1660.
Available at: https://doi.org/10.1016/j.future.2013.01.010
Accessed: 19 January 2026.

LEE, I. and LEE, K., 2015.
The Internet of Things (IoT): Applications, investments, and challenges for enterprises. *Business Horizons* [online], 58(4), pp. 431-440.
Available at: https://doi.org/10.1016/j.bushor.2015.03.008
Accessed: 30 January 2026.

MIORANDI, D., SICARI, S., DE PELLEGRINI, F. and CHLAMTAC, I., 2012.
Internet of Things: Vision, applications and research challenges. *Ad Hoc Networks* [online], 10(7), pp. 1497-1516.
Available at: https://doi.org/10.1016/j.adhoc.2012.02.016
Accessed: 11 February 2026.

PORTER, M.E. and HEPPELMANN, J.E., 2015.
How smart, connected products are transforming companies. *Harvard Business Review* [online], 93(10), pp. 96-114.
Available at: https://hbr.org/2015/10/how-smart-connected-products-are-transforming-companies
Accessed: 24 January 2026.

STATISTA, 2024.
*IoT: Number of connected devices worldwide 2019-2030*. Market Research Report.
Available at: https://www.statista.com/statistics/1183457/iot-connected-devices-worldwide/
Accessed: 10 January 2026.

TZOUNIS, A., KATSOULAS, N., BARTZANAS, T. and KITTAS, C., 2017.
Internet of Things in agriculture, recent advances and future challenges. *Biosystems Engineering* [online], 164, pp. 31-48.
Available at: https://doi.org/10.1016/j.biosystemseng.2017.09.007
Accessed: 06 February 2026.

XU, L.D., HE, W. and LI, S., 2014.
Internet of Things in industries: A survey. *IEEE Transactions on Industrial Informatics* [online], 10(4), pp. 2233-2243.
Available at: https://doi.org/10.1109/TII.2014.2300753
Accessed: 03 February 2026.

ZANELLA, A., BUI, N., CASTELLANI, A., VANGELISTA, L. and ZORZI, M., 2014.
Internet of Things for smart cities. *IEEE Internet of Things Journal* [online], 1(1), pp. 22-32.
Available at: https://doi.org/10.1109/JIOT.2014.2306328
Accessed: 17 February 2026.

---

### **2.2.2 Core Architecture and Components**

Understanding how IoT systems work requires looking at their architecture—the way different components fit together to enable the capabilities discussed earlier. While IoT implementations vary widely depending on application, most follow a similar layered structure where each layer performs specific functions and communicates with adjacent layers (Al-Fuqaha et al., 2015). This modular approach offers practical advantages: organizations can start with basic implementations and expand gradually, replace individual components without redesigning entire systems, and select technologies appropriate to their specific needs and constraints.

The architecture commonly divides into four main layers that move data from the physical world through progressive stages of abstraction and intelligence. At the bottom, the **perception layer** captures raw data from the physical environment. Above it, the **network layer** transports this data across communication infrastructure. The **middleware layer** processes and organizes information, while the **application layer** at the top delivers meaningful insights and control interfaces to end users (Al-Fuqaha et al., 2015). Each layer addresses distinct technical and business challenges.

#### **Perception Layer: Sensing and Actuation**

The perception layer forms the physical interface between digital systems and the real world. This is where sensors measure parameters like soil moisture, temperature, humidity, light intensity or nutrient concentrations, converting physical phenomena into digital signals. Equally important are actuators—devices that execute physical actions such as opening irrigation valves, activating pumps or adjusting environmental controls based on system decisions (Al-Fuqaha et al., 2015).

Sensor selection involves clear trade-offs between accuracy, cost, durability and power consumption. High-precision sensors provide reliable measurements necessary for critical applications but cost significantly more than basic alternatives. For agricultural applications, this creates practical decisions: is centimeter-precision soil moisture measurement essential, or will trend monitoring with lower accuracy suffice? The answer depends on crop value, water costs and system objectives. A commercial olive operation managing water scarcity faces different requirements than a hobbyist garden (Tzounis et al., 2017).

Deployment considerations further complicate sensor choices. How many sensors does a field actually need? Too few and the data misses important spatial variations; too many and costs become prohibitive. Sensor placement requires understanding both the measured phenomenon—how soil moisture varies with terrain, for example—and practical constraints like accessibility for maintenance. Battery-powered sensors eliminate wiring costs but need replacement or recharging, while grid-powered sensors require electrical infrastructure (Al-Fuqaha et al., 2015).

Actuators present different challenges centered on reliability and response time. An irrigation valve that fails to close wastes water; one that fails to open stresses crops. Response delays between receiving a command and executing action may be acceptable for gradual adjustments but problematic for time-sensitive interventions. These reliability requirements influence both component selection and overall system design.

#### **Network Layer: Communication Infrastructure**

The network layer handles data transmission between devices and processing systems. This seemingly straightforward function involves complex trade-offs that significantly impact system performance and cost. Agricultural environments present particular challenges: fields are often distant from reliable connectivity, power sources are limited or absent, and physical obstacles like terrain or vegetation interfere with signals (Al-Fuqaha et al., 2015).

Different communication technologies address these challenges with varying strengths. **Wi-Fi** offers high data rates and low equipment costs but limited range (typically 50-100 meters) and high power consumption make it suitable primarily for indoor or grid-powered applications. **LoRaWAN** provides long-range connectivity (2-15 kilometers) with very low power consumption enabling battery-powered sensors to operate for years, though at reduced data rates appropriate for periodic measurements rather than video streaming. **Cellular networks** (4G/5G) deliver extensive coverage and high speeds but consume substantial power and incur ongoing subscription costs. **Bluetooth** and **Zigbee** work well for short-range device-to-device communication with minimal power draw (Al-Fuqaha et al., 2015).

Selecting appropriate communication technology requires matching capabilities to needs. Does the application need real-time video from fields, or are hourly sensor readings sufficient? Is cellular coverage reliable at the location? Can infrastructure costs be justified by operational area and sensor density? A smallholder farmer faces very different answers than an agribusiness managing thousands of hectares.

Network reliability deserves particular attention because connectivity failures disrupt the entire system value proposition. If soil moisture data never reaches the cloud platform because of network outages, the system cannot generate irrigation recommendations. Robust designs include local data buffering—storing measurements temporarily when connectivity is unavailable—and fail-safe behaviors that ensure safe operation even during communication failures (Al-Fuqaha et al., 2015).

#### **Middleware Layer: Data Processing and Management**

The middleware layer bridges raw sensor data and useful applications. Here, data gets processed, organized, stored and prepared for analysis. This layer often includes both edge computing capabilities—processing done locally near sensors—and cloud-based infrastructure handling storage and advanced analytics (Al-Fuqaha et al., 2015).

Edge computing addresses several practical problems. First, transmitting every sensor reading to the cloud consumes bandwidth and incurs data transmission costs. Local processing can filter noise, aggregate values and transmit only meaningful summaries. Second, edge processing enables offline operation. If an irrigation controller can make basic decisions locally using recent sensor data, temporary connectivity losses do not halt operations. Third, time-sensitive responses benefit from local processing that avoids round-trip communication delays to distant cloud servers (Al-Fuqaha et al., 2015).

Cloud platforms bring complementary strengths. Cloud infrastructure offers essentially unlimited storage for historical data, powerful computing for sophisticated analytics, and accessibility from any internet-connected device. Cloud services handle software updates automatically, provide built-in redundancy and backups, and scale effortlessly as systems grow from pilot projects to full deployments. The subscription model reduces upfront investment though it creates ongoing operational costs (Gubbi et al., 2013).

Data organization becomes critical at this layer. IoT systems generate continuous streams of measurements that need efficient storage and rapid retrieval. Time-series databases specialized for this purpose make it practical to ask questions like "what was the soil moisture pattern in field 3 during last August?" or "how does irrigation timing correlate with yield outcomes?" Without proper data management, the system drowns in numbers without gaining insight (Al-Fuqaha et al., 2015).

#### **Application Layer: User Interfaces and Services**

The application layer is what users actually see and interact with—dashboards displaying current conditions, mobile apps sending alerts, control interfaces for manual intervention, and analytical tools revealing patterns in historical data. Despite being the top layer architecturally, the application layer often determines whether users adopt and trust the system (Al-Fuqaha et al., 2015).

Good interface design balances comprehensiveness with simplicity. Dashboards that display every available metric overwhelm users; dashboards that oversimplify hide important nuances. Effective designs prioritize the information users need for decisions—current status, alerts requiring attention, and trends indicating developing situations—while making detailed data accessible when needed. Mobile applications extend this accessibility to the field, letting farmers check conditions and receive alerts without returning to an office (Tzounis et al., 2017).

Multi-user access introduces additional considerations. Farm owners need comprehensive views including financial analytics and strategic trends. Operators need practical tools for daily irrigation decisions and equipment management. External advisors—agronomists or irrigation consultants—may need read-only access to specific data. Supporting these different roles while maintaining security requires thoughtful design (Al-Fuqaha et al., 2015).

The application layer also encompasses integration with external services. Modern agricultural IoT systems rarely operate in isolation. They may consume weather forecasts to adjust irrigation schedules, integrate with farm management software tracking inputs and yields, or connect to market information systems. These integrations multiply system value but require standardized data formats and robust interface designs (Tzounis et al., 2017).

#### **Architectural Benefits and Practical Implications**

This layered architecture offers concrete business advantages. Organizations can implement systems incrementally, starting with basic sensing and control before adding advanced analytics. Individual components can be upgraded or replaced without redesigning the entire system—switching from Wi-Fi to LoRaWAN for better range, or migrating to a different cloud platform if needs change. Vendor independence reduces lock-in risks and preserves negotiating leverage (Al-Fuqaha et al., 2015).

However, integration across layers presents challenges. Components from different vendors must communicate through standardized protocols and data formats. Compatibility issues can emerge unexpectedly, requiring technical expertise to resolve. These integration challenges partly explain why complete systems—even with higher costs—often prove more practical than assembling custom solutions from individual pieces (Al-Fuqaha et al., 2015).

Understanding this architecture helps evaluate IoT offerings realistically. Marketing materials emphasize capabilities; architecture understanding reveals dependencies, potential failure points and hidden costs. Can the system function with intermittent connectivity? What happens when sensors fail or communication is interrupted? How much effort does maintenance require? These questions become answerable through architectural analysis.

While this architecture enables powerful capabilities, IoT's true value emerges from how data flows through these layers and transforms into decisions. The next section examines data management practices that convert raw measurements into actionable insights.

---

## **REFERENCES FOR SECTION 2.2.2**

AL-FUQAHA, A., GUIZANI, M., MOHAMMADI, M., ALEDHARI, M. and AYYASH, M., 2015.
Internet of Things: A survey on enabling technologies, protocols, and applications. *IEEE Communications Surveys & Tutorials* [online], 17(4), pp. 2347-2376.
Available at: https://doi.org/10.1109/COMST.2015.2444095 
Accessed: 28 January 2026.

GUBBI, J., BUYYA, R., MARUSIC, S. and PALANISWAMI, M., 2013.
Internet of Things (IoT): A vision, architectural elements, and future directions. *Future Generation Computer Systems* [online], 29(7), pp. 1645-1660.
Available at: https://doi.org/10.1016/j.future.2013.01.010
Accessed: 19 January 2026.

TZOUNIS, A., KATSOULAS, N., BARTZANAS, T. and KITTAS, C., 2017.
Internet of Things in agriculture, recent advances and future challenges. *Biosystems Engineering* [online], 164, pp. 31-48.
Available at: https://doi.org/10.1016/j.biosystemseng.2017.09.007
Accessed: 06 February 2026.

---

### **2.2.3 Data Management and Cloud Infrastructure**

The architectural layers described in the previous section exist to serve one primary purpose: transforming raw sensor measurements into actionable knowledge. This transformation happens through data management—the processes by which IoT systems collect, transmit, store, analyze and present information. While sensors and networks provide the mechanics of data capture and movement, effective data management determines whether the system delivers genuine value or merely accumulates meaningless numbers (Gubbi et al., 2013).

#### **The Data Value Chain**

Raw sensor readings have no inherent value. A soil moisture measurement of "23.4%" means nothing without context: Is this adequate for the current crop stage? How does it compare to yesterday or last season? What action should follow? IoT systems create value by moving data through progressive stages of refinement: raw measurements become organized information when given context, information becomes insight when patterns reveal meaning, and insights enable decisions that produce tangible outcomes (Al-Fuqaha et al., 2015).

Consider a practical example. An olive grove's soil moisture sensors transmit readings every hour. Without management, this generates 8,760 data points per sensor annually—overwhelming and unusable. Effective data management organizes these readings by location and time, compares them against crop water requirements, identifies trends suggesting developing drought stress, and presents farmers with clear recommendations: "Field 3 requires irrigation within 24 hours" or "Current moisture levels adequate for next 72 hours." The technical measurement becomes an operational decision (Tzounis et al., 2017).

#### **Data Collection and Quality**

Data quality begins at collection. How frequently should sensors measure? The answer depends on how rapidly conditions change and how time-sensitive decisions are. Soil moisture evolves slowly over hours or days, making hourly readings sufficient. Greenhouse temperature might require measurements every few minutes. Over-sampling wastes energy and storage; under-sampling misses important changes (Al-Fuqaha et al., 2015).

Sensor accuracy matters, but perfect accuracy proves unnecessary for many applications. Knowing soil moisture declined from 35% to 25% provides adequate decision information even if actual values are 33% and 23%. Trend detection often matters more than absolute precision. This practical reality allows cost-effective sensor deployment where high-precision instruments would be economically prohibitive (Tzounis et al., 2017).

Data validation at collection is crucial. Sensors fail, connections loosen, and calibration drifts. A soil moisture sensor reading 95% during drought or 5% immediately after rain signals obvious error. Simple validation rules can flag suspicious readings for human review rather than letting bad data corrupt analytics and trigger inappropriate actions. Robust systems treat sensor data with healthy skepticism, cross-checking against expected ranges and recent history (Al-Fuqaha et al., 2015).

#### **Storage and Organization**

IoT systems generate data continuously, creating storage challenges distinct from traditional business databases. Time-series databases specialized for IoT workloads handle these patterns efficiently, storing measurements as sequences indexed by device and timestamp. This organization makes common IoT queries fast: "Show me Field 3's moisture pattern for the past month" or "Compare this season's irrigation timing with last year's" (Gubbi et al., 2013).

Storage costs have declined dramatically, making long-term data retention economically practical. Historical data accumulates value over time. One season's measurements enable basic irrigation decisions; five seasons reveal patterns between water management and yield outcomes, growing degree-days and optimal irrigation timing, or soil variability and sensor placement effectiveness. This accumulated knowledge transforms reactive irrigation into predictive management (Tzounis et al., 2017).

Cloud platforms dominate IoT storage for practical reasons. Cloud infrastructure scales effortlessly as data accumulates, requires no local server maintenance, provides automatic backups and redundancy, and enables access from any internet-connected device. The subscription model eliminates large upfront hardware investments, though it creates ongoing operational expenses that must be factored into system economics (Gubbi et al., 2013).

#### **From Data to Decisions**

Analytics transform organized data into actionable insights. IoT systems employ multiple analytical approaches depending on questions being asked. **Descriptive analytics** answers "what happened"—summarizing past conditions, visualizing trends and documenting historical performance. **Diagnostic analytics** explores "why it happened"—correlating irrigation timing with yield outcomes or identifying factors behind crop stress episodes. **Predictive analytics** forecasts "what will happen"—projecting future water needs based on weather forecasts, growth stage and historical patterns. **Prescriptive analytics** recommends "what should we do"—generating optimal irrigation schedules that balance water conservation, crop needs and operational constraints (Al-Fuqaha et al., 2015).

Practical systems often combine these approaches. A dashboard shows current soil moisture (descriptive), compares it against optimal ranges for current crop stage (diagnostic), projects when irrigation will be needed (predictive), and recommends scheduling that coordinates with weather forecasts and labor availability (prescriptive). This integrated analysis supports more nuanced decisions than any single analytical approach (Tzounis et al., 2017).

Simple threshold-based alerts provide surprising value despite their analytical simplicity. "Soil moisture below 20%" or "No data received from Field 4 sensors for 6 hours" immediately flag situations requiring attention without demanding continuous human monitoring. Well-designed alert systems distinguish truly urgent situations from normal variations, avoiding alert fatigue where users learn to ignore frequent nuisance notifications (Al-Fuqaha et al., 2015).

#### **Visualization and User Experience**

The best analytics prove worthless if farmers cannot understand or access them. Visualization design directly impacts system adoption and effectiveness. Effective dashboards highlight key information—current status, active alerts, trending issues—while keeping detailed data accessible for deeper investigation. Color-coding communicates rapidly: green for normal conditions, yellow for developing concerns, red for urgent situations. Trend graphs reveal patterns difficult to detect in numerical tables (Tzounis et al., 2017).

Mobile access extends IoT value beyond the office. Farmers can check current conditions from anywhere, receive urgent alerts immediately, and verify that requested actions were executed. Mobile interfaces must balance functionality with simplicity since small screens and field conditions limit interaction complexity. Well-designed apps prioritize the specific tasks users perform mobile: checking status, acknowledging alerts and authorizing urgent actions (Al-Fuqaha et al., 2015).

Historical analysis capabilities matter for continuous improvement. Farmers benefit from comparing current season performance against previous years, understanding how irrigation timing affected yields, or documenting water use for regulatory compliance. These retrospective capabilities justify system costs by enabling incremental optimization year over year (Tzounis et al., 2017).

#### **Security and Privacy Considerations**

Agricultural IoT systems collect commercially sensitive information about operations, yields and management practices. Data breaches could expose this information to competitors or malicious actors. Basic security practices include encrypted data transmission, strong user authentication, role-based access controls, and regular security updates. While agricultural systems face lower security threats than financial or medical applications, ignoring security invites preventable problems (Al-Fuqaha et al., 2015).

Data ownership and privacy gain importance as agricultural IoT systems connect to cloud platforms and external services. Who owns the data—farmers, equipment vendors or platform providers? Can data be shared or sold to third parties? What happens to data if the farmer switches platforms? Clear agreements addressing these questions build trust and ensure farmers retain control over their operational information (Gubbi et al., 2013).

#### **Practical Integration Challenges**

Real-world data management confronts messy realities. Sensors drift from calibration, requiring periodic adjustment. Cellular connections fail during storms exactly when real-time data matters most. Farmers need information during busy periods when they have minimal time to interpret complex analytics. Effective systems anticipate these challenges, providing fail-safe defaults, local data buffering for offline operation, and simplified interfaces that surface essential information without requiring advanced technical expertise (Tzounis et al., 2017).

System interoperability presents ongoing challenges. Agricultural operations typically involve equipment from multiple vendors—sensors from one manufacturer, irrigation controllers from another, farm management software from a third. Getting these components to exchange data reliably requires standardized interfaces and data formats that vendors have been slow to adopt. This fragmentation forces farmers to either accept vendor lock-in or invest significant time and technical expertise in custom integrations (Al-Fuqaha et al., 2015).

While data management enables powerful capabilities, the ultimate test of IoT value lies in agricultural applications. The next section examines how these technological capabilities translate into practical benefits for digital agriculture and specifically for irrigation management in Mediterranean olive cultivation.

---

### **2.2.4 IoT in Digital Agriculture**

The technological capabilities explored in previous sections—sensing, connectivity, data management and analytics—find particularly compelling applications in agriculture. Farming has always been information-intensive: successful farmers continuously observe crops, soil, weather and pests to make countless daily decisions. IoT technology dramatically expands what farmers can observe, how rapidly they can respond, and how effectively they can optimize operations over time (Tzounis et al., 2017).

#### **Digital Agriculture: A Transformative Shift**

Digital agriculture represents a fundamental change in how farming operates. Traditional agriculture relied heavily on generalized recommendations, personal experience and periodic observations. Farmers applied uniform treatments across entire fields based on average conditions, scheduled irrigation according to fixed intervals or simple evapotranspiration estimates, and discovered problems through visual inspection or declining yields. This approach worked adequately when water and labor were abundant and margins forgiving (Wolfert et al., 2017).

Contemporary agriculture faces different constraints. Water scarcity intensifies globally, particularly in Mediterranean regions where aquifer depletion and climate variability threaten traditional production systems. Labor costs rise while availability declines. Environmental regulations increasingly restrict input use and require documentation. Simultaneously, market competition intensifies and consumers demand sustainability credentials. These converging pressures make optimization essential rather than optional (Tzounis et al., 2017).

Digital agriculture addresses these challenges through data-driven precision. Instead of uniform treatments, systems tailor interventions to specific field zones based on actual conditions. Rather than fixed schedules, irrigation responds dynamically to real-time crop water status, weather forecasts and soil conditions. Problems get detected and addressed early rather than after visible damage appears. Operations that once required constant physical presence can be monitored remotely, reducing labor requirements while improving oversight (Wolfert et al., 2017).

#### **IoT as the Sensing Layer**

IoT functions as digital agriculture's sensory system, providing continuous observation of conditions that previously required manual checking. Soil moisture sensors eliminate guesswork about irrigation timing. Weather stations capture microclimate conditions specific to individual farms rather than relying on distant monitoring stations. Crop sensors detect plant stress before visual symptoms appear. Equipment sensors monitor system operation, alerting managers to failed pumps or clogged emitters immediately rather than days later when crop damage becomes obvious (Tzounis et al., 2017).

This sensing density transforms management fundamentally. Traditional irrigation scheduling relied on soil moisture measured occasionally with manual probes or estimated from weather data and crop coefficients. IoT systems measure actual field conditions continuously at multiple locations. This eliminates two common irrigation errors: applying water when soil already holds adequate moisture, or delaying irrigation until crops already experience stress. Both mistakes reduce yield and waste resources; continuous monitoring prevents them (Kamienski et al., 2019).

The information IoT provides enables coordination impossible with isolated sensors. Integrating soil moisture data with weather forecasts allows systems to delay irrigation before predicted rain, avoiding water waste. Combining moisture readings with evapotranspiration calculations and crop growth stage determines optimal irrigation quantity and timing. Linking field sensors with water source monitoring enables load balancing across irrigation zones, maintaining pressure and ensuring fair distribution (Tzounis et al., 2017).

#### **Concrete Benefits for Irrigation Management**

Water use optimization provides the most direct benefit. Multiple studies document water savings of 20-40% when IoT systems replace conventional irrigation scheduling, with savings varying based on previous practices, crop type, and system sophistication. These reductions come primarily from three sources: applying water only when actually needed rather than fixed schedules, adjusting application rates to actual soil conditions rather than maximum capacity, and catching leaks or equipment failures immediately rather than after extended waste (Kamienski et al., 2019).

For Mediterranean olive growers, water savings translate directly to reduced costs and improved drought resilience. Olive cultivation in Spain, Italy, Greece and North Africa increasingly faces water restrictions and allocation conflicts. IoT-enabled precision irrigation allows maintaining or increasing production while consuming substantially less water—critical for operational sustainability and regulatory compliance (Tzounis et al., 2017).

Energy savings accompany water reductions. Pumping represents a major operational cost, particularly where irrigation requires lifting water significant vertical distances or maintaining pressure across hilly terrain. Reducing water volume directly decreases pumping duration and energy consumption. Some studies suggest energy savings parallel water savings—20-40% reductions are typical with well-designed systems (Kamienski et al., 2019).

Yield stability and quality often improve beyond water savings alone. Maintaining optimal soil moisture throughout growing seasons reduces crop stress, promoting consistent fruit development and quality. Over-irrigation proves as harmful as under-irrigation, leaching nutrients, promoting disease and reducing fruit quality. Precision management avoids both extremes, maintaining the narrow optimal range that maximizes yield and quality (Tzounis et al., 2017).

Labor efficiency gains matter increasingly as agricultural labor becomes scarce and expensive. IoT systems reduce time spent on irrigation monitoring and management. Farmers check conditions remotely rather than driving to fields multiple times daily. Automatic irrigation adjustments eliminate manual valve operation. Alert-based management focuses attention on situations requiring intervention rather than continuous monitoring of normal operations. These time savings let farmers manage larger areas or reallocate time to higher-value activities (Kamienski et al., 2019).

#### **Adoption Barriers in Mediterranean Context**

Despite clear benefits, IoT adoption in Mediterranean agriculture remains limited, particularly among small and medium-scale operations that dominate olive production. Several barriers explain slow uptake. Initial costs loom large for farmers with tight margins. A complete IoT irrigation system—sensors, controllers, connectivity, platform subscription—represents substantial investment that may exceed annual irrigation water costs. Farmers uncertain about returns prove understandably hesitant (Tzounis et al., 2017).

Technical complexity deters adoption. Many farmers lack digital skills for system installation, configuration and troubleshooting. Vendor support often proves limited in rural areas. Some farmers distrust automated systems, preferring manual control based on personal experience and observation. This resistance reflects both limited technology exposure and legitimate concerns about system reliability (Wolfert et al., 2017).

Infrastructure limitations constrain deployment in rural Mediterranean regions. Cellular coverage remains spotty in remote agricultural areas. Power availability can be problematic for battery-powered sensors in locations distant from electrical infrastructure. Internet bandwidth sufficient for home use may struggle with multiple concurrent IoT connections. These infrastructure gaps make reliable system operation difficult regardless of technology sophistication (Kamienski et al., 2019).

Cultural and organizational factors matter beyond technical considerations. Mediterranean olive farming often involves small family operations

 with deep-rooted traditional practices and generational knowledge. Adopting radically different technology-driven approaches represents significant social and psychological change requiring education, demonstration and peer influence. Successful adoption typically requires trusted local champions who can demonstrate benefits using systems adapted to regional conditions and constraints (Tzounis et al., 2017).

#### **Future Trajectory**

Despite current barriers, digital agriculture's trajectory points toward widespread adoption driven by converging forces. Technology costs continue declining while capabilities improve. Sensors, communication modules and cloud services become cheaper annually. User interfaces simplify even as analytical sophistication increases. This combination gradually lowers adoption barriers (Wolfert et al., 2017).

Regulatory pressure accelerates adoption. European agricultural policies increasingly require water use documentation and incentivize conservation. Subsidy programs sometimes cover partial IoT system costs. Environmental regulations restricting water extraction make precision irrigation essential for sustainable operation. These external pressures overcome some economic and cultural barriers to adoption (Tzounis et al., 2017).

Market differentiation through sustainability credentials creates business incentives. Consumers and retailers increasingly demand documented sustainable production practices. IoT systems provide the monitoring and documentation capabilities needed to verify and market sustainability claims, potentially commanding premium prices that justify investment costs (Kamienski et al., 2019).

Climate change adaptation makes precision irrigation from optional to essential. Mediterranean projections show increasing temperatures, declining rainfall, more frequent droughts and greater climatic variability. Traditional irrigation approaches optimized for historical climate patterns prove inadequate for changing conditions. IoT-enabled adaptive irrigation becomes necessary for continued viable production (Tzounis et al., 2017).

The technological foundation examined in this chapter establishes how IoT systems function and create value in agricultural applications. The subsequent chapter examines specific system design for Mediterranean olive cultivation, addressing both technical implementation and practical adoption considerations for this particularly water-stressed context.

---

## **REFERENCES FOR SECTIONS 2.2.3 AND 2.2.4**

AL-FUQAHA, A., GUIZANI, M., MOHAMMADI, M., ALEDHARI, M. and AYYASH, M., 2015.
Internet of Things: A survey on enabling technologies, protocols, and applications. *IEEE Communications Surveys & Tutorials* [online], 17(4), pp. 2347-2376.
Available at: https://doi.org/10.1109/COMST.2015.2444095 
Accessed: 28 January 2026.

GUBBI, J., BUYYA, R., MARUSIC, S. and PALANISWAMI, M., 2013.
Internet of Things (IoT): A vision, architectural elements, and future directions. *Future Generation Computer Systems* [online], 29(7), pp. 1645-1660.
Available at: https://doi.org/10.1016/j.future.2013.01.010
Accessed: 19 January 2026.

KAMIENSKI, C., SOININEN, J.P., TAUMBERGER, M., DANTAS, R., TOSCANO, A., SALMON CINOTTI, T., FILEV MAIA, R. and TORRE NETO, A., 2019.
Smart water management platform: IoT-based precision irrigation for agriculture. *Sensors* [online], 19(2), 276.
Available at: https://doi.org/10.3390/s19020276
Accessed: 14 February 2026.

TZOUNIS, A., KATSOULAS, N., BARTZANAS, T. and KITTAS, C., 2017.
Internet of Things in agriculture, recent advances and future challenges. *Biosystems Engineering* [online], 164, pp. 31-48.
Available at: https://doi.org/10.1016/j.biosystemseng.2017.09.007
Accessed: 06 February 2026.

WOLFERT, S., GE, L., VERDOUW, C. and BOGAARDT, M.J., 2017.
Big data in smart farming – A review. *Agricultural Systems* [online], 153, pp. 69-80.
Available at: https://doi.org/10.1016/j.agsy.2017.01.023
Accessed: 22 February 2026.

---

## **2.3 Olive Cultivation and Irrigation: Agronomic and Environmental Background**

The previous sections explained how IoT systems collect, transmit and process data. For Mediterranean olive cultivation, however, technological capability alone is not sufficient. A smart irrigation system can only function effectively when it is configured around the agronomic reality of the crop: how olive trees use water, how orchard layout influences irrigation uniformity, which environmental thresholds affect growth, and which parameters must be monitored to protect both yield and oil quality. This section therefore establishes the biological and environmental design basis required for configuring an IoT-based irrigation system for olive orchards.

### **2.3.1 Olive Tree Characteristics and Environmental Requirements**

Olive trees (*Olea europaea* L.) are well adapted to Mediterranean and semi-arid environments, but this adaptation should not be interpreted as low sensitivity to irrigation management. Their drought resistance comes from a combination of morphological and physiological traits rather than from an absence of water needs. Olive leaves are small, thick and protected by waxes and trichomes, which reduce transpiration. Stomatal regulation limits water loss during periods of high evaporative demand, while osmotic adjustment helps maintain tissue function under moderate stress (Ennajeh et al., 2010; Sofo et al., 2008; Massenti et al., 2022). These traits explain why olive trees can survive dry summers, but they do not eliminate the need for controlled irrigation when the objective is stable production and high-quality oil.

The root system is especially important for irrigation design. Olive trees can develop extensive root networks with both lateral exploration and deeper water extraction, particularly in well-structured soils. In practical terms, the highest density of active roots is usually concentrated in the upper 0.3-0.8 m of soil, although roots may extend deeper where the profile is permeable and water is available (Rodríguez-Domínguez, 2014; López-Bernal et al., 2020). For sensor placement, this means that the monitored root zone should not be limited to the soil surface. In most orchards, moisture monitoring at two or three depths, such as 20 cm, 40 cm and 60 cm, provides a more reliable picture of water availability than a single shallow sensor.

Soil conditions strongly influence olive performance and irrigation efficiency. Olive trees perform best in well-drained loam, sandy loam or clay loam soils that combine sufficient water-holding capacity with adequate aeration. Heavy compacted soils may retain water excessively and reduce oxygen availability around roots, while excessively sandy soils drain rapidly and require more frequent irrigation. Poor drainage is a major constraint because olive trees are sensitive to prolonged waterlogging, which increases the risk of root asphyxia and disease. For this reason, irrigation design must always consider infiltration rate, drainage behavior and the risk of localized saturation.

Olive trees are moderately tolerant to salinity compared with many fruit crops, but tolerance is not unlimited. In general, soil electrical conductivity below about 4 dS/m is considered acceptable for commercial production, whereas higher values progressively reduce growth and productivity. Irrigation water with elevated salinity also requires closer monitoring because repeated application can concentrate salts in the wetted root zone under drip irrigation. In practice, salinity should be treated as a control variable rather than as a static soil property.

Temperature thresholds are equally relevant for smart irrigation configuration. Olive trees generally perform well under mean air temperatures around 20-30 C during the growing season. Root activity is favored when soil temperatures remain roughly between 18 C and 25 C, while root absorption becomes limited at low temperatures and plant stress intensifies when soil temperatures become excessively high. Reproductive stages are especially sensitive. Frost events near flowering can damage buds and reduce fruit set, whereas high temperatures during flowering can reduce pollen viability and fruit retention. These climatic sensitivities mean that irrigation decisions cannot be based only on soil moisture; they must also account for temperature and atmospheric demand.

Taken together, these characteristics show that olive trees are resilient but highly responsive to how water is supplied within specific soil and climatic limits. For smart irrigation design, the crop should therefore be treated as drought adapted but physiologically sensitive during key periods.

### **2.3.2 Olive Orchard Establishment and Field Design**

Orchard layout is a basic input for irrigation network design because planting density determines emitter number, pipeline length, water demand per irrigation sector and the spatial variability that sensors must represent. In traditional Mediterranean orchards, spacing commonly ranges from 7 x 7 m to 10 x 10 m, equivalent to about 100-204 trees per hectare. For a 5-hectare field, this corresponds approximately to 500-1,020 trees. In more intensive irrigated orchards, spacing may range from 5 x 5 m to 6 x 5 m, corresponding roughly to 333-400 trees per hectare, or about 1,665-2,000 trees on 5 hectares. The appropriate choice depends on cultivar vigor, soil fertility, mechanization strategy and water availability.

Several planting layouts are possible. Square planting simplifies movement and creates symmetrical tree distribution, which can simplify drip-line design. Rectangular planting facilitates machinery access and is often more practical for irrigation laterals and harvesting operations. On sloping land, contour planting is preferable because it reduces runoff and improves water distribution uniformity. For a smart irrigation system, row orientation also matters. North-south orientation is generally preferred where feasible because it improves light distribution and reduces excessive shading within the canopy.

For a 5-hectare orchard intended for monitored drip irrigation, a rectangular or square field divided into irrigation sectors is usually the most practical solution. Field subdivision should reflect both hydraulic constraints and crop management needs. Each sector should contain trees with similar topography, soil conditions and irrigation requirements so that the same irrigation command is agronomically meaningful across the zone. If soils are highly heterogeneous, a single control zone for the entire field may reduce precision and increase either under-irrigation or water waste.

Spacing affects more than tree count. Wider spacing generally increases the soil volume explored by each tree and may reduce competition for water, but it also enlarges the dry area between trees and changes emitter placement strategy. Narrower spacing can improve land productivity but increases total orchard water demand and requires closer hydraulic uniformity. Root zone development follows this geometry. In practical terms, emitter number, lateral placement and sensor location must correspond to the wetted pattern created around each tree rather than to field averages alone.

Soil preparation before planting is equally important. Deep tillage or ripping may be required where compaction restricts root penetration. Levelling improves irrigation uniformity on flat fields, while drainage correction is essential where water stagnation occurs. Baseline soil analysis should be completed before orchard establishment to determine texture, pH, organic matter, salinity and macronutrient status. These data provide the initial calibration basis for irrigation and fertigation planning.

Table 2.3.1 summarizes the main orchard layout values relevant for a 5-hectare field.

| Layout type | Typical spacing | Trees per hectare | Approximate trees on 5 ha | Main implication for irrigation design |
| --- | --- | ---: | ---: | --- |
| Traditional | 10 x 10 m | 100 | 500 | Lower tree density, wider wetted area per tree |
| Traditional-semi intensive | 7 x 7 m | 204 | 1,020 | Moderate density, larger spacing between laterals |
| Intensive | 6 x 5 m | 333 | 1,665 | Higher emitter demand and more sectors |
| Intensive | 5 x 5 m | 400 | 2,000 | Greater hydraulic precision required |

For practical implementation, row orientation should preferably follow a north-south direction where topography permits, while field zoning should group trees with similar slope, soil and irrigation demand.

### **2.3.3 Water Requirements and Irrigation Management of Olive Trees**

Olive tree water requirements vary across phenological stages. The most sensitive periods are flowering, fruit set and early fruit development, when water deficits can directly reduce fruit retention and final yield (Fereres and Soriano, 2007; Iniesta et al., 2009). Water demand remains important during oil accumulation and ripening because severe stress during this period can reduce oil content and alter quality attributes. By contrast, controlled deficit during less sensitive stages, especially around pit hardening, is often agronomically acceptable and can improve water productivity.

The standard framework for irrigation scheduling is crop evapotranspiration, expressed as $ET_c = ET_0 \times K_c$. Here, $ET_0$ represents reference evapotranspiration derived from climatic variables, while $K_c$ adjusts this value to olive tree conditions. For olive orchards, typical crop coefficients often fall within a range of approximately 0.40 to 0.70 depending on canopy density, season and orchard management (Orgaz et al., 2006; Pastor et al., 2021). Lower values are associated with early vegetative development, while higher values occur during active fruit growth and maximum canopy demand.

In seasonal terms, irrigated Mediterranean olive orchards commonly require roughly 2,000-4,000 m3/ha/year, although the actual value depends on climate, tree density, soil depth and production goals. For a 5-hectare orchard, this corresponds broadly to 10,000-20,000 m3 over the irrigation season. If the production objective is premium oil rather than maximum fruit mass, full irrigation is not always desirable. Many studies support moderate deficit irrigation strategies that satisfy full water demand during flowering and fruit set but reduce supply during less sensitive periods. In practical terms, orchards targeting high oil quality often operate with seasonal applications closer to the lower or middle part of the irrigation range rather than continuous full replacement of evapotranspiration.

Drip irrigation is the most suitable method for olive orchards because it allows localized application, better hydraulic control and compatibility with automation. Compared with surface irrigation, drip systems reduce evaporation losses, improve uniformity and allow irrigation to be scheduled according to measured soil and plant conditions. For smart irrigation, this method also facilitates sector-based control and fertigation.

Irrigation scheduling should combine climatic demand with root-zone measurements. Soil water should ideally remain between field capacity and the management allowable depletion level. In many olive systems, irrigation is triggered before depletion exceeds approximately 40-50% of available soil water (Marino et al., 2022). During flowering and fruit set, the allowable depletion should remain conservative because stress at these stages directly affects productivity. During pit hardening, a larger depletion margin may be tolerated under regulated deficit irrigation. This stage-based flexibility is central to efficient control logic.

From a sustainability perspective, water-use efficiency is not simply a matter of applying less water. The goal is to maximize productive output per unit of water while avoiding the hidden costs of poor irrigation, including yield instability, oil quality loss, salinity buildup and energy waste. This is why smart irrigation must be configured around thresholds and timing, not only around seasonal totals.

Table 2.3.2 presents the main water-management values that should guide irrigation planning.

| Parameter | Practical range or target | Design relevance |
| --- | --- | --- |
| Seasonal irrigation demand | 2,000-4,000 m3/ha/year | Defines annual system capacity |
| Total seasonal demand for 5 ha | 10,000-20,000 m3/year | Defines storage and pumping needs |
| Olive crop coefficient ($K_c$) | 0.40-0.70 | Used to calculate $ET_c$ |
| Sensitive stages | Flowering, fruit set, early fruit growth | Periods requiring conservative irrigation |
| Regulated deficit stage | Pit hardening | Period where controlled deficit may be allowed |
| Allowable depletion before irrigation | About 40-50% of available water | Main irrigation trigger logic |
| Preferred irrigation method | Drip irrigation | Best suited for automation and fertigation |

### **2.3.4 Effects of Irrigation on Yield and Olive Oil Quality**

Irrigation level directly affects both fruit yield and oil quantity. Under-irrigation during flowering and fruit set reduces fruit number and fruit retention, while severe stress during fruit enlargement reduces fruit size and total extractable oil. In contrast, moderate irrigation generally increases yield stability and supports more consistent fruit development (Gucci et al., 2019). For this reason, orchards managed only under severe drought stress may survive, but they rarely achieve reliable commercial productivity.

Oil quality, however, does not respond to water in a linear way. Excessive irrigation can increase vegetative growth and fruit water content while diluting quality-related compounds in the oil. Over-irrigation is commonly associated with lower phenolic concentration, weaker sensory intensity and reduced oxidative stability. Moderate deficit, by contrast, often improves the concentration of phenolic compounds and antioxidant constituents, especially when water restriction is imposed at carefully selected stages such as pit hardening or late summer (Dag et al., 2018; Caruso et al., 2020). This means that the irrigation strategy for premium oil quality is usually not the same as the strategy for maximum fresh fruit yield.

The practical implication for smart irrigation is that target water quantities should be adjusted according to the production objective. If the priority is high-quality virgin olive oil, irrigation should avoid severe water stress during reproductive stages but also avoid continuous excess moisture during oil biosynthesis and maturation. In many Mediterranean systems, this translates into a moderate deficit strategy rather than full evapotranspiration replacement throughout the season. The quality objective is therefore not maximum irrigation, but optimized irrigation.

Table 2.3.3 summarizes the practical relationship between irrigation strategy and production objective.

| Irrigation condition | Expected effect on yield | Expected effect on oil quality |
| --- | --- | --- |
| Severe under-irrigation | Lower fruit set, smaller fruit, lower oil yield | Quality may decline if stress is prolonged |
| Moderate, well-timed irrigation | Stable yield and better fruit development | Balanced oil quality and quantity |
| Moderate deficit at selected stages | Slightly lower yield risk if poorly timed | Often improves phenolic concentration and oxidative stability |
| Excessive irrigation | Vegetative growth may increase but efficiency declines | Lower phenolic content and diluted sensory quality |

### **2.3.5 Agronomic Parameters for Smart Irrigation System Configuration**

For an IoT-based irrigation system, agronomic knowledge must be converted into measurable control variables. The most important parameter is root-zone soil moisture. For practical configuration, soil moisture should remain close to field capacity after irrigation but should not remain permanently saturated. During sensitive stages such as flowering and fruit set, depletion should generally be kept limited, with irrigation triggered before more than about 40% of available water is depleted. During less sensitive stages, particularly under regulated deficit irrigation, depletion may be allowed to approach 50% depending on soil depth and plant condition. In operational terms, the system should not rely on a single absolute moisture value for the whole season; it should use stage-dependent thresholds.

Soil temperature is the second key parameter because it influences root activity and water uptake efficiency. Root-zone temperatures around 18-25 C are generally favorable. Persistent low values reduce absorption and slow growth, while very high soil temperatures may intensify plant stress and alter moisture dynamics around emitters. For this reason, temperature sensors are useful not only for agronomic analysis but also for interpreting moisture data correctly.

Salinity should also be monitored, especially under drip irrigation in arid environments. As a practical threshold, soil EC values below about 4 dS/m are generally acceptable, while higher values indicate increasing risk to growth and productivity. Where salinity increases over time, the system should support management responses such as modified irrigation depth, periodic leaching or water quality review.

Fertilization must be compatible with irrigation scheduling because modern drip systems are frequently used for fertigation. Olive nutrient demand varies with age, yield level and soil fertility, but productive orchards commonly require nitrogen, phosphorus and potassium supplementation, with potassium being especially important for fruit development and oil formation. As a practical annual range, many irrigated orchards apply roughly 60-120 kg/ha nitrogen, 30-60 kg/ha phosphorus equivalent, and 80-150 kg/ha potassium equivalent, adjusted through soil and leaf analysis. This means the irrigation system should be capable not only of distributing water uniformly, but also of supporting controlled nutrient injection where fertigation is used.

The essential variables to monitor in a smart olive irrigation system are therefore: soil moisture at multiple depths, soil temperature, soil or water salinity, air temperature, relative humidity, rainfall and reference evapotranspiration inputs. Additional variables such as flow rate, line pressure and valve status are also critical because agronomic recommendations have little value if the hydraulic system fails to apply them correctly.

From a system design perspective, this section leads to a clear requirement: the control logic must combine orchard layout, phenological stage, soil properties and climatic demand. A technically functional irrigation platform is not enough; the system must be configured around the biological thresholds that determine whether olive trees produce only surviving biomass or commercially valuable, high-quality oil.

Table 2.3.4 consolidates the key agronomic parameters that should remain visible during system configuration.

| Variable to monitor | Practical target or threshold | Why it matters |
| --- | --- | --- |
| Soil moisture | Keep between field capacity and stage-specific depletion threshold | Main control variable for irrigation decisions |
| Root-zone depth | Common monitoring depths: 20, 40 and 60 cm | Captures active olive root water uptake |
| Management allowable depletion | Usually 40-50% of available water | Defines irrigation trigger level |
| Soil temperature | Preferably 18-25 C | Influences root absorption and sensor interpretation |
| Soil salinity (EC) | Preferably below 4 dS/m | Higher values reduce growth and productivity |
| Air temperature | Common productive range: 20-30 C | Supports climatic interpretation of water demand |
| Fertilization range | N: 60-120 kg/ha, P: 30-60 kg/ha, K: 80-150 kg/ha | Supports fertigation planning |
| Hydraulic monitoring | Flow, pressure, valve status | Confirms irrigation commands are actually applied |

These tables make the agronomic logic of the system explicit: the smart irrigation platform should be configured not only to deliver water, but to maintain olive trees within the thresholds associated with stable yield, efficient water use and high-quality oil production.
