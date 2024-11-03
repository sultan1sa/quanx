#!name=All In One

[Rule]
AND,((DOMAIN-SUFFIX,googlevideo.com), (PROTOCOL,UDP)),REJECT
AND,((DOMAIN,youtubei.googleapis.com), (PROTOCOL,UDP)),REJECT


[Script]



#Youtube
#hostname = *.googlevideo.com, youtubei.googleapis.com
youtube.request = type=http-request,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|reel\/reel_watch_sequence|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,engine={{{脚本执行引擎}}},script-path=https://raw.githubusercontent.com/sultan1sa/Try-configure-/refs/heads/main/Script/Youtube/dist/youtube.request.preview.js
youtube.response = type=http-response,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,engine={{{脚本执行引擎}}},script-path=https://raw.githubusercontent.com/sultan1sa/Try-configure-/refs/heads/main/Script/Youtube/dist/youtube.response.preview.js,argument="{"lyricLang":"{{{歌词翻译语#SpotifyPremium

[Map Local]
^https?:\/\/[\w-]+\.googlevideo\.com\/initplayback.+&oad data-type=text data="{}" status-code=200
^https?:\/\/[\w-]+\.googlevideo\.com\/initplayback.+&oad data-type=text data=""

[MITM]
hostname = *.googlevideo.com, youtubei.googleapis.com