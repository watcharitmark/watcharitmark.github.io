{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {
      "url": "https://raw.githubusercontent.com/watcharitmark/Mark/master/__inf_ปริมาณมูลฝอย61.csv"
  },
  
  "title": "ปริมาณขยะมูลฝอยในปี 2561",


  "height": {"step": 15},
  "width": 500,
  "mark": "bar",
  "encoding": {
  "y": {
      "field": "dname",
      "type": "ordinal",
      "title": "เขต",
      "sort": {}
    },
    "x": {
      "field": "Average",
      "type": "quantitative",
      "axis": {"title": "ค่าเฉลี่ยปริมาณมูลฝอยในแต่ละเดือนตั้งแต่เดือน ตุลาคม ปี 2560 ถึง กันยายน ปี 2561"}
    },
    "color":{"field":"dname",
            "title":"เขต"},


    "tooltip": [{"field": "dname", "type": "ordinal"},
                {"field": "Average", "type": "quantitative"}]
  }
}