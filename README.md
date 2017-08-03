# iidopage
iidopage is library for generate page menu

##demo
``` html
<ul id="menu" class="pageNavitor">
</ul>
```

``` javascript
new pageMenu('menu').generate(5,1);
```

output:
``` html
<ul id="menu" class="pageNavitor">
	<li class="current">1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
```