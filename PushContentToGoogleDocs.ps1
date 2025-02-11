# File Copy Script
# Usage: Specify the source and destination file paths

# Source files (replace with your actual file paths)
$SourceFile1 = "C:\localhost\recon1\index.html"
$SourceFile2 = "C:\localhost\recon1\InvestorDeck.html"

# Destination files (replace with your desired destination paths)
$DestFile1 = "G:\Shared drives\Recon1\Recon1 - Website"
$DestFile2 = "G:\Shared drives\Recon1\Recon1 - Investor Deck"

# Perform the file copies
try {
    # Copy first file
    Copy-Item -Path $SourceFile1 -Destination $DestFile1 -Force

    # Copy second file
    Copy-Item -Path $SourceFile2 -Destination $DestFile2 -Force

    Write-Host "Files copied successfully:" -ForegroundColor Green
    Write-Host "  $SourceFile1 -> $DestFile1" -ForegroundColor Cyan
    Write-Host "  $SourceFile2 -> $DestFile2" -ForegroundColor Cyan
}
catch {
    Write-Host "An error occurred while copying files:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

return 0




