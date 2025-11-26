document.getElementsByClassName("download-app")[0].addEventListener("click", function(e) {
  e.preventDefault();
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    window.location.href = "https://images.21947392.com/wsd-images-prod/xx88vndkf1/merchant_resource/android/xx88vndkf1_2.4.79_20251118220009.apk";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href = "https://images.21947392.com/wsd-images-prod/xx88vndkf1/merchant_resource/mobileconfig/xx88vndkf1_2.4.3_20251118215950.mobileconfig";
    } else {
      alert("Vui lòng tải ứng dụng trên điện thoại Android hoặc iOS.");
    }
  });

  document.querySelector(".back-home").addEventListener("click", function(e) {
    e.preventDefault(); 
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/"; 
    }
  });
