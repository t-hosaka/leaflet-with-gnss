//GNSS リアルタイム測位を開始する
function lock_on() {
   //位置情報取得に対するオプション
   var lock_opt = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
   };

   //オプションをセットして位置情報の取得を開始
   var GNSS_lock = navigator.geolocation.watchPosition(lock_ok, lock_ng, lock_opt);

   //位置情報取得が成功したら取得した位置を中心に描画
   //on スイッチを表示する
   function lock_ok(position) {
      map.setView([position.coords.latitude, position.coords.longitude]);
      document.getElementById("gnss_on").style.display = "";
      document.getElementById("gnss_off").style.display = "none";
   };

   //位置情報が取得できなかった場合の処理
   function lock_ng() {
      window.alert("位置情報を利用できません");
   };
}

//GNSS リアルタイム測位を停止
function lock_off() {
   //位置情報の取得を停止する
   var GNSS_lock = 0;
   navigator.geolocation.clearWatch(GNSS_lock);

   //off スイッチを表示する
   document.getElementById("gnss_on").style.display = "none";
   document.getElementById("gnss_off").style.display = "";
}