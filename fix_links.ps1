$count = 0
$files = Get-ChildItem ".\Ifm documentation" -Recurse -Filter "*.html"
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $new = $content -replace 'https://github\.com/bellaminemo81172/sentinum_documentation/blob/', 'https://raw.githubusercontent.com/bellaminemo81172/sentinum_documentation/'
    if ($new -ne $content) { [System.IO.File]::WriteAllText($file.FullName, $new); $count++ }
}
Write-Host "Fixed $count files"
