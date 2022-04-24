#!/bin/bash

echo "Entre com sua linguagem: "
read language
cp -r ./template100 "./$language"

echo "Qual a extensão da linguagem?"
cd "./$language"
read ext
for i in *txt; do
    mv -- "$i" "${i%.txt}.$ext"
done
