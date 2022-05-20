  local example = {
     {
       name = 'FuegoDel',
       xp = '320'
     },
     {
      name = 'Fuego',
      xp = '300'
    },
    {
      name = 'Deler',
      xp = '290'
    },
    {
      name = 'F4egoD',
      xp = '257'
    },
    {
      name = 'Fuego Ra',
      xp = '234'
    },
    {
      name = 'RaFuego',
      xp = '232'
    },
    {
      name = 'FuegoDel',
      xp = '225'
    },
    {
      name = 'FuegoDel',
      xp = '221'
    },
    {
      name = 'FuegoDel',
      xp = '214'
    },
    {
      name = 'FuegoDel',
      xp = '154'
    },
  }
  
  
  
  RegisterNetEvent('fuego:top10')
  AddEventHandler('fuego:top10', function(name,object,competition)
    SetNuiFocus(true,true)
    SendNUIMessage({
         display = true,
         name = name,
         object = object,
         color = Config.UIColor,
         type = competition
       })
  end)


  RegisterNUICallback('closeNUI', function()
    SetNuiFocus(false,false)
  end)


RegisterCommand('testtop10', function()
  local array = {                 --How to use the code example

  }

  for k,v in pairs(example)do 
    table.insert(array,{name = v.name, points = v.xp}) --Insert all the shorted data into an array with spesific values
  end

  TriggerEvent('fuego:top10',--[[TOP 10]]'JOBS',--[[leaderboard]]array,--[[points]]'Crafting Points')
end)