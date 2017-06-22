---
permalink: /posts/
layout: page
title: Posts
---

<div class="row" style="padding-bottom: 50px;">
<ul>
    {% for post in site.posts %}
        <div class="row">
            <h1> {{ post.title }} </h1>
            <span class="post-date"> {{ post.date | date_to_string }} </span>
            {{ post.content }}
        </div>
    {% endfor %}
</ul>
</div>
