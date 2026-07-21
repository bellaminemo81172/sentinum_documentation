$files = @(
  ".\Ifm documentation\Juno Ifm TH TILT mioty\General description\Juno_ifm_mioty_TH_TILT_General_description_EN.html",
  ".\Ifm documentation\Juno Ifm TH TILT mioty\NFC and downlink description\Juno_ifm_mioty_TH_TILT_NFC_and_Downlink_Description_EN.html",
  ".\Ifm documentation\Juno Ifm TH TILT mioty\Operating instructions\Juno_ifm_mioty_TH_TILT_Operating_Instructions_EN.html",
  ".\Ifm documentation\Juno Ifm TH TILT mioty\Payload description\Juno_ifm_mioty_TH_TILT_Payload_Description_EN.html",
  ".\Ifm documentation\Juno Ifm TH TILT mioty\quick start guide\Juno_ifm_mioty_TH_TILT_Quick_Start_Guide_EN.html",
  ".\Ifm documentation\Juno Ifm TH TILT mioty\Technical data sheet\Juno_ifm_mioty_TH_TILT_Technical_Datasheet_EN.html",
  ".\Ifm documentation\Juno Ifm TH TILT mioty\blueprint\mioty_blueprint_Sensoren_Integration_ifm_Gateway_EN.html"
)
foreach ($f in $files) {
  $name = Split-Path $f -Leaf
  $c = [System.IO.File]::ReadAllText($f)
  $doc = if($c -match '<!DOCTYPE') {'YES'} else {'NO'}
  $html = if($c -match '<html') {'YES'} else {'NO'}
  $head = if($c -match '<head') {'YES'} else {'NO'}
  $body = if($c -match '<body') {'YES'} else {'NO'}
  Write-Host "$name => DOCTYPE=$doc html=$html head=$head body=$body"
}

