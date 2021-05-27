let a=[]

function tag(selector)
{
	return document.querySelector(selector)
}
function tags(selector)
{
	return document.querySelectorAll(selector)
}
tag(".edit").style.display="none"

function insert()
{
	event.preventDefault()
	let name=tag(".insert .name").value
	let status=tag(".insert .status").value
	if(name)
	{
		if(a.some(x=>x.name===name))
		{
			alert("this task already exists")
		}
		else
		{
			a.push({id:a.length+1,name,status})
			table()
			save()
		}
	}
	else
	{
		alert("cannot add empty task")
	}
	tag(".edit").style.display="none"
}


function del(id)
{
	a=a.filter(x=>x.id!=id)
	table()
	save()
	tag(".edit").style.display="none"
}

function edit(index)
{
	tag(".edit .id").value=index
	tag(".edit .name").value=a[index].name
	tag(".edit .status").checked=a[index].status
	tag(".edit").style.display="block"
}	

function update()
{
	event.preventDefault()
	let name=tag(".edit .name").value
	let status=tag(".edit .status").checked
	let index=tag(".edit .id").value
	a[index].name=name
	a[index].status=status
	table()
	save()
	tag(".edit").style.display="none"
}

function table()
{

	let tr=a.map((x,i) =>`<tr>
						<td>${x.id}</td>
						<td>${x.name}</td>
						<td>${x.status?"completed":"pending"}</td>
						<td>
							<button class="edit-btn" onclick="edit(${i})">
								edit</i>
							</button>
							<button class="delete-btn" onclick="del(${x.id})">
								delete</i>
							</button>
						</td>
					</tr>`)
	
	let str=`<h1>no todos </h1>`
	if(a.length>0)
	{

	 str=`
			<h1>All todos </h1>
			<table cellpadding="10" cellspacing="0">
				<thead>
					<tr>
						<th>sno</th>
						<th>title</th>
						<th>completed</th>
						<th>actions</th>
					</tr>
				</thead>
				<tbody>
					${tr.join('')}
				</tbody>
			</table>

	`
	}

	tag(".table").innerHTML=str
}

function save()
{
	localStorage.setItem("a",JSON.stringify(a))
}

if(localStorage.getItem("a"))
{
	a=JSON.parse(localStorage.getItem("a"))
}

table()