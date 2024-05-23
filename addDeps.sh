
for d in "$(depcheck)";do echo $d|cut -f2;done > deps

for y in $(cat deps|cut -f2 -d' '|grep -v depend|cut -f1 -d:);do yarn add --force ${y};done

rm deps
