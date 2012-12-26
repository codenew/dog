for /f %%i in ('dir /b ..\backup\*' ) do (
	mongoimport -d dog -c  %%i ..\backup\%%i
)