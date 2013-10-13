unixstamps=(2013-10-13T18:50:03.141Z 2013-10-21T18:50:03.141Z 2013-10-22T18:50:03.141Z 2013-10-23T18:50:03.141Z 2013-10-24T18:50:03.141Z 2013-10-25T18:50:03.141Z 2013-10-19T18:50:03.141Z 2013-09-27T18:50:03.141Z 2013-09-23T18:50:03.141Z)

git init

for i in "${unixstamps[@]}"
do
	for j in {1..7}
	do
		echo " " >> editablefile.md
		git add .
		git commit -m "rvkn" --date="$i"
	done
done
