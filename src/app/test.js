itemsC =
{
  content: [
    { 'title': 'welcome',
      'subtitle1': 'panni és máté úttörő lagzi fesztivál'
    },
    {
      'title': 'holmikor',
      'subtitle1': 'csillebérci úttörő tábor',
      'content1': '4-es altábor',
      'subtitle2': '2017 július 15 szombat',
      'content2': '17:00 érkezés',
      'link': ''
    },
    {
      'title': 'program'
    },
    {
      'title': 'kajapia'
    },
    {
      'title':'képek'
    },
    {
      'title':'szállás'
    },
    {
      'title': 'ajándék'
    }
  ]
}

let items = itemsC.content
//
// items.forEach((item, index) => {
//   for(var element in item){
//     if(element == 'title'){
//       console.log(item[element], index)
//     }
//   }
// })



let navItems = items
let newElement =  []
navItems.forEach((item, index) =>
{
  for(var element in item){
    console.log(element);
    console.log(item[element]);
    if(element === 'title'){
        newElement.push(item[element])
      // (<NavItem item={item[element]} key={index}/>)
    }
  }
  return newElement
})

getTitle(state){
  let items = this.state.items
  let title = []
  items.forEach((item, index) =>
  {
    for(var element in item){
      if(element === 'title'){
          title.push(item[element])
      }
    }
    return title
  })
}
console.log(newElement);
