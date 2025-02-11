# Simple Script to Convert HTML to Google Docs .gdoc

# Source and destination files
$sourceFiles = @(
    "C:\localhost\recon1\index.html",
    "C:\localhost\recon1\InvestorDeck.html"
)

$destFiles = @(
    "G:\Shared drives\Recon1\Recon1 - Website.gdoc",
    "G:\Shared drives\Recon1\Recon1 - Investor Deck.gdoc"
)

# Ensure equal number of files
if ($sourceFiles.Count -ne $destFiles.Count) {
    Write-Host "Error: Number of source and destination files must match!" -ForegroundColor Red
    exit
}

# Process each file
for ($i = 0; $i -lt $sourceFiles.Count; $i++) {
    try {
        # Check if source file exists
        if (-not (Test-Path $sourceFiles[$i])) {
            Write-Host "Source file not found: $($sourceFiles[$i])" -ForegroundColor Yellow
            continue
        }

        # Read file content efficiently
        $content = [System.IO.File]::ReadAllText($sourceFiles[$i])

        # Create simple JSON structure
        $gdocContent = @{
            "file_name" = (Split-Path $sourceFiles[$i] -Leaf)
            "mime_type" = "application/vnd.google-apps.document"
            "content" = $content
        } | ConvertTo-Json -Compress

        # Write to destination
        $gdocContent | Set-Content -Path $destFiles[$i] -Encoding UTF8

        Write-Host "Converted $($sourceFiles[$i]) to $($destFiles[$i])" -ForegroundColor Green
    }
    catch {
        Write-Host "Error converting $($sourceFiles[$i]): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "Conversion complete." -ForegroundColor Cyan

return 0 