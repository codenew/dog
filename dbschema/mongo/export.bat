set tmp_bat="tmp.bat"
del %tmp_bat%

mongo.exe --quiet dog export.js >>%tmp_bat%

call %tmp_bat%

del %tmp_bat%

goto :eof
:noparams
	echo "no params!"
:eof


