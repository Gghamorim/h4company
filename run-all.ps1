Param(
    [int]$BackendPort = 8000
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendDir = Join-Path $root "backend"
$frontendDir = Join-Path $root "frontend"

$backendCommand = @"
cd `"$backendDir`"
. .\.venv\Scripts\Activate
uvicorn server:app --reload --host 0.0.0.0 --port $BackendPort
"@

$frontendCommand = @"
cd `"$frontendDir`"
npm start
"@

Start-Process pwsh.exe -WindowStyle Normal -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command', $backendCommand -WorkingDirectory $backendDir
Start-Process pwsh.exe -WindowStyle Normal -ArgumentList '-NoExit', '-ExecutionPolicy', 'Bypass', '-Command', $frontendCommand -WorkingDirectory $frontendDir

Write-Host "Backend: http://localhost:$BackendPort"
Write-Host "Frontend: http://localhost:3000"
