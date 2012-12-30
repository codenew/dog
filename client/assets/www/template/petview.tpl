<ul>
{foreach $models as $i => $pet}
<li>
{$i} : {$pet}
</li>
{foreachelse}
<li><p>你还没有宠物</p></li>
{/foreach}
</ul>