const teamMembers = document.getElementById('team_members')
const theForm = document.forms['techForm']
const table = document.querySelector('table')
function handleSubmit(e){
    e.preventDefault();
    let data = new FormData(theForm)
    let row = teamMembers.insertRow()
    for(let [key, value] of data){
        if(key === 'bgColor' || key === 'textColor' || key === 'size'){
            data.get('textColor') && (teamMembers.style.color = data.get('textColor'))
            data.get('bgColor') && (teamMembers.style.backgroundColor = data.get('bgColor'))
            data.get('size') && (table.style.width = `${data.get('size')}px`)
        }else{
            row.insertCell().innerHTML = data.get(key)
        };
    }
}
