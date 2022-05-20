fx_version 'adamant'
game 'gta5'
author 'Fuego'
lua54'yes'

ui_page "html/index.html"

files{
    'html/index.html',
    'html/images/*.png',
    'html/script.js',
    'html/style.css',
    'html/fonts/*.woff',
    'html/fonts/*.woff2'
}


client_script('client/client.lua')
shared_script('config.lua')