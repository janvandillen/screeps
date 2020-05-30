Copy-Item -Path ".\JS\*" -Destination (".\Rollback") -Recurse
TSC
Copy-Item -Path ".\JS\*" -Destination ($env:LOCALAPPDATA + "\Screeps\scripts\85_214_144_146___21025\default") -Recurse

$confirmation = Read-Host "Do you want to Rollback: [y/n]"
if ($confirmation -eq 'y') {
    Copy-Item -Path ".\Rollback\*" -Destination (".\JS") -Recurse
    Copy-Item -Path ".\Rollback\*" -Destination ($env:LOCALAPPDATA + "\Screeps\scripts\85_214_144_146___21025\default") -Recurse
}