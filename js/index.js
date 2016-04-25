var streamers = ["freecodecamp", "storbeck", "medrybw", "habathcx", "RobotCaleb", "noobs2ninjas"]

var url = 'https://api.twitch.tv/kraken/';
var cb = '?client_id=ayziejfkssjpiq5un9rpowp5omnosh4&callback=?';
streamers.forEach(function(stream) {
  $.getJSON(url + 'streams/' + stream + cb).success(function(data) {
    if (data.stream) {
      var status = data.stream.channel.status;
      $("#online").append("<img class=online src=" + data.stream.channel.logo + ">" + "<a target='_blank' href='http://www.twitch.tv/" + stream + "'><br>" + status + "</a><br>Viewers : " + data.stream.viewers + "<br>");
    } else {
      $.getJSON(url + 'users/' + stream + cb).success(function(data) {
        $("#offline").append("<img class=offline src=" + data.logo + "><a target='_blank' href='http://www.twitch.tv/" + stream + "'><br>" + stream + "</a><br>");
      });
    }
  });
});