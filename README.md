# f_top10
An NUI Leaderboard that features the top10 of whatever you choose


in client/client.lua you will find an example on how exatcly to use this resource!
Basically once you have a shortened array you use a loop to insert the elements to a new local array but
the object/values names are different so they can be read through javascript!

  local array = {                 --How to use the code example

  }

  for k,v in pairs(example)do 
    table.insert(array,{name = v.name, points = v.xp}) --Insert all the shorted data into an array with spesific values
  end
