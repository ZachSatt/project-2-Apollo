$(document).ready(data) => {
    let endpoint = 'https://rest.coinapi.io/v1/assets'
    let apiKey = 'D32D2ADB-60CF-4590-B934-C549111A0D59'
    $(".content a").each((index, element) => {
        $.ajax({
            url: endpoint + "?key=" + apiKey + " &q=" + $(this).text(),
            contentType: "application/json",
            dataType: 'json',
            success: function (result) {
                console.log(result);
            }
        })
    });
});

module.exports = data;