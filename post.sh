#!/usr/bin/bash

timestamp=$(date +%Y-%m-%d\ %T\ %z)
file=_posts/$(date +%Y-%m-%d)-$1.markdown
touch $file

echo '---' >> $file
echo layout: post >> $file
echo title:  $1 >> $file
echo date: $timestamp >> $file
echo published: false >> $file
echo '---' >> $file
