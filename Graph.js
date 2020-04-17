{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {
      "url": "https://raw.githubusercontent.com/watcharitmark/Mark/master/_inf_ปริมาณมูลฝอย61.csv"
  },
  
  "title": "ปริมาณขยะมูลฝอยปี 2561",


  "height": {"step": 15},
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "dname",
      "type": "ordinal",
      "title": "เขต"
    },
    "x": {
      "field": "Average",
      "type": "quantitative",
      "axis": {"title": "ค่าเฉลี่ยปริมาณมูลฝอยตั้งแต่เดือน ตุลาคม ปี 2560 ถึง กันยายน ปี 2561"}
    },
    "color":{"field":"dname",
            "title":"เขต"},


    "tooltip": [{"field": "dname", "type": "ordinal"},
                {"field": "Average", "type": "quantitative"}]
  }
}
