# File Copy Script
# Usage: Specify the source and destination file paths

# Source files (replace with your actual file paths)
#$SourceFile1 = "C:\localhost\recon1\index.html"
#$SourceFile2 = "C:\localhost\recon1\InvestorDeck.html"

# Destination files (replace with your desired destination paths)
#$DestFile1 = "G:\Shared drives\Recon1\Recon1 - Website.txt"
#$DestFile2 = "G:\Shared drives\Recon1\Recon1 - Investor Deck.txt"

# Script to copy contents of two text files to Google Docs .gdoc files

# Define source and destination file paths
$sourceTextFiles = @(
    "C:\localhost\recon1\index.html",
    "C:\localhost\recon1\InvestorDeck.html"
)

$destinationGDocFiles = @(
    "G:\Shared drives\Recon1\Recon1 - Website.gdoc",
    "G:\Shared drives\Recon1\Recon1 - Investor Deck.gdoc"
)

# Ensure the number of source and destination files match
if ($sourceTextFiles.Count -ne $destinationGDocFiles.Count) {
    Write-Host "Error: The number of source and destination files must be the same."
    exit
}

# Process each file
for ($i = 0; $i -lt $sourceTextFiles.Count; $i++) {
    try {
        # Read the contents of the source text file
        $fileContents = Get-Content -Path $sourceTextFiles[$i] -Raw -ErrorAction Stop

        # Create the Google Docs JSON structure
        $gDocContent = @{
            "url" = ""
            "doc_name" = (Get-Item $sourceTextFiles[$i]).BaseName
            "doc_type" = "document"
            "mime_type" = "application/vnd.google-apps.document"
            "content" = $fileContents
        } | ConvertTo-Json

        # Write the contents to the .gdoc file
        $gDocContent | Set-Content -Path $destinationGDocFiles[$i] -Encoding UTF8 -ErrorAction Stop

        # Confirm the file was created
        if (Test-Path $destinationGDocFiles[$i]) {
            Write-Host "Successfully copied $($sourceTextFiles[$i]) to $($destinationGDocFiles[$i])"
        } else {
            Write-Host "Error: Could not create file $($destinationGDocFiles[$i])"
        }
    }
    catch {
        Write-Host "Error processing file $($sourceTextFiles[$i]): $($_.Exception.Message)"
    }
}


return 0





