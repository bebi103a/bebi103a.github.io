(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("b2769380-627d-468f-b13b-d5267d43ff3e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b2769380-627d-468f-b13b-d5267d43ff3e' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"1fe4a504-99f8-4fdb-8938-b3a42a9028d8":{"roots":{"references":[{"attributes":{"axis_label":"alive sperm (millions)","formatter":{"id":"1152"},"ticker":{"id":"1121"}},"id":"1120","type":"LinearAxis"},{"attributes":{"axis":{"id":"1124"},"dimension":1,"ticker":null},"id":"1127","type":"Grid"},{"attributes":{"axis":{"id":"1120"},"ticker":null},"id":"1123","type":"Grid"},{"attributes":{"line_color":"orange","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1160","type":"Line"},{"attributes":{},"id":"1118","type":"LinearScale"},{"attributes":{},"id":"1121","type":"BasicTicker"},{"attributes":{},"id":"1133","type":"HelpTool"},{"attributes":{},"id":"1116","type":"LinearScale"},{"attributes":{},"id":"1150","type":"BasicTickFormatter"},{"attributes":{},"id":"1114","type":"DataRange1d"},{"attributes":{"overlay":{"id":"1134"}},"id":"1130","type":"BoxZoomTool"},{"attributes":{},"id":"1131","type":"SaveTool"},{"attributes":{},"id":"1152","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1161","type":"Line"},{"attributes":{},"id":"1132","type":"ResetTool"},{"attributes":{},"id":"1128","type":"PanTool"},{"attributes":{"data":{"__ECDF":{"__ndarray__":"Xpso2bWJ4j8XQzpvMaTjP2G5pxGWe7o/uBjSeYsh3T+amZmZmZnZP18qaPWlguY/1AjLPY2w7D/Q6ksFrb7kP9J5iyGdt7g/fBphuacR1j8luzZRsmuzPw54/OGAx88/uBjSeYsh7T/t2kTJrk3kP+tLBa2+VOA/UbJrEyW75j8OePzhgMffP/D4wwGPP3w/3mJI5y2G5D/uaYTlnkbYP3waYbmnEcY/7dpEya5NxD/w+MMBjz/sPzXCck8jLOc/GmG5pxGW6z/GkM5bDOnsPwtafamg1cc/Jbs2UbJrwz9jSOcthnTeP08jLPc0wuI/YbmnEZZ76j+WexphuafRP+KAxx8OeOw/J0p2baJk5z9TQasvFbTqP/5wwOMPB+w/famg1ZcK2j+2iZJdmyjZP3844PGHA74/QzpvMaTz5j8Jyz2NsNzjPyW7NlGya9M/+cMBjz8c4D96iyGdtxjSP7gY0nmLIc0/RcmuTZTs6j+LIZ23GNLpPypo9aWCVu8/tPpSQasv5T8nSnZtomTXPwnLPY2w3NM/8PjDAY8/3D98GmG5pxHmP7T6UkGrL7U/8PjDAY8/jD+k8xZDOm/hP9QIyz2NsNw/QzpvMaTzxj9tomTXJkrmPzMzMzMzM+M/lnsaYbmnwT8qaPWlglbfP3844PGHA+4/QasvFbT64j8OePzhgMevP28xpPMWQ+o/QzpvMaTz1j96iyGdtxjiP9J5iyGdt8g/wnJPIyz35D+YClp9qaDlP7T6UkGrL9U/60sFrb5U0D/Q6ksFrb7UP6aCVl8qaOU/z1sM6bzF0D+0+lJBqy+VPynZtYmSXes/mApafamg1T+bKNm1iZLdP0dY7mmE5d4/0nmLIZ236D+Kkl2bKNnlPwtafamg1dc/fzjg8YcD3j+poNWXClrtPw54/OGAx+8/QzpvMaTztj83UbJrEyXrP2G5pxGWe9o/R1juaYTl7j/w+MMBjz+8P5so2bWJku0/4PGHAx5/6D8LWn2poNXnP0dY7mmE5c4/0nmLIZ232D+NsNzTCMvtP3844PGHA84/VdDqSwWt7j9emyjZtYnSPynZtYmSXds/DOm8xZDO6z8luzZRsmvjPzjg8YcDHu8/bBMluzZR4j8p2bWJkl3LP/tSQasvFeQ/tomSXZso6T9huacRlnvKP3HA4w8HPO4/3dMIyz2N4D+oEZZ7GmHpP5Z7GmG5p+E/iAMefzjg4T9Bqy8VtPrSP7T6UkGrL8U/mpmZmZmZyT/w+MMBjz+cP5Z7GmG5p6E/tPpSQasvpT8AAAAAAADwP2NI5y2GdO4/xAGPPxzw6D/w+MMBjz/MPxzw+MMBj+8/mpmZmZmZ6T/PWwzpvMXAP9J5iyGdt6g/famg1ZcK6j/uaYTlnkboP7JrEyW7NtE/RcmuTZTs2j9fKmj1pYLWPwzpvMWQzts/7dpEya5N1D8Z0nmLIZ3nP89bDOm8xeA/Dnj84YDHvz9emyjZtYnCP8DjDwc8/uA//OGAxx8O6D+yaxMluzbhP/D4wwGPP6w/lnsaYbmnsT8=","dtype":"float64","order":"little","shape":[145]},"__dummy_cat":[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],"__label":[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144],"x":{"__ndarray__":"IqXZPA6jAEB0z7pGy6EBQPGcLSC0HrY/wocSLXn8+z/jqUca3Nb4P/1pozodqARA3uLhPQd2CkCR1hh0QogCQLwGfentz7U/MzMzMzMz9T9mZmZmZmamP1NZFHZR9O8/220Xmuu0C0ALsmX5ukwCQLjOv132K/8/xvgwe9nWBEBmZmZmZqb9PwAAAAAAAAAA/yH99nWAAkCvCP63kh34P/Iqa5vicdc/mpmZmZmZyT8dVyO70hIKQGZmZmZm5gRA6Qsh5/3fCEBWurvOhlwLQHUhVn+EYeM/IPEr1nCRxz/OoKF/gsv8P85WXvI/2QBAc/ON6J41CEC8IY0KnOzwP0MhAg6hagpAQgkzbf8KBUBfB84ZUToIQO8AT1q47AlAKVsk7UZf+T/rUiP0M3X4P5w0DYrmAbw/m+jzUUbcBEA6lQwAVdwBQB3O/GoOUPI/9rhvtU7c/T+u8C4X8V3xP2w9QzhmWe0/RdrGn6hMCEBTzhd7L14HQDPd66S+DBFADhKifEHLAkCU3GETmbn3P/hVuVD5l/I/Obh0zHlG+z9ivyfWqVIDQJqZmZmZmak/AAAAAAAAAABNEkvK3WcAQAaFQZlG0/s/TZ6ymq4n4D8vGFxzR/8DQAt72uGvSQFAtyqJ7IMswz/CoiJOJ9n8Pw1Z3eo5KQ5AzR39L9ciAUDqtG6D2m+dPyk900uMJQhADw72JoZk9z8zw0ZZv5kAQKDf929eHOQ/1t8SgH+qAkBsmQzH8zkDQFDCTNu/MvQ/JNQMqaI48D8C8bp+wS70PxUDJJpA8QJAG2ZoPBFE8D8AAAAAAAAAAKwb746MtQhAiPccWI7Q9D83ct2U8lr8P7x0kxgE1vw/7GrylNUUBkC1GhL3WDoDQAithy8TBfg/Zjiez4B6/D8sZK4Mqk0MQAAAAAAAABRA6MByhAzksT+rlQm/1K8IQPZE14UfnPk/5wMCnUnrEEDs+gW7Ydu2PzcWFAZlWgxA8Kmc9pT8BUAdHOxNDKkFQD1kyoeg6u4/Q+IeSx86+D96jV2ieusNQM20/Ssrze0/rgs/OJ9aD0BINIEiFvHxPwPQKF36V/o/54u9F190CUAejUP9LowBQIidKXRe8xBAmu/gJw6gAEASh2wgXWznP2jr4GBvIgJA1dFxNbJLBkBK0jWTb7bkP3u3eeOkMA5A2VpfJLRl/z8lIZG28UcHQBJtx9RdeQBAAAAAAACAAED9oC5SKEvyPxDqIoWy8NI/Ewt8Rbde5D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABP5EnSNXMYQDWSBOEKaA5A2iCTjJxFBkAPe6GA7eDqP18M5US7ihFADTSfc7dLB0DCvwgaM4nAPwAAAAAAAAAAHottUtGYB0B6HXHIBvIFQE/IztvYbPA/JZLoZRQL+j8EWyVYHM71Py6vXG+b6fo/RRK9jGJ58z9qM05DVCEFQBkjEoWWtf8/j05d+SzPvz8mVHB4QUTGP1uzlZf8LwBAycnErYLYBUAFiljEsEMAQAAAAAAAAAAApHA9CtejoD8=","dtype":"float64","order":"little","shape":[145]}},"selected":{"id":"1154"},"selection_policy":{"id":"1155"}},"id":"1142","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"1158"}],"visible":false},"id":"1157","type":"Legend"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1128"},{"id":"1129"},{"id":"1130"},{"id":"1131"},{"id":"1132"},{"id":"1133"}]},"id":"1135","type":"Toolbar"},{"attributes":{},"id":"1125","type":"BasicTicker"},{"attributes":{"axis_label":"ECDF","formatter":{"id":"1150"},"ticker":{"id":"1125"}},"id":"1124","type":"LinearAxis"},{"attributes":{"source":{"id":"1142"}},"id":"1147","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b3"},"line_color":{"value":"#1f77b3"},"x":{"field":"x"},"y":{"field":"__ECDF"}},"id":"1144","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b3"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b3"},"x":{"field":"x"},"y":{"field":"__ECDF"}},"id":"1145","type":"Circle"},{"attributes":{},"id":"1129","type":"WheelZoomTool"},{"attributes":{},"id":"1172","type":"Selection"},{"attributes":{},"id":"1154","type":"Selection"},{"attributes":{},"id":"1112","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAADQsuM5lRSgP9Cy4zmVFLA/OIzV1t8euD/QsuM5lRTAP4SfXIi6GcQ/OIzV1t8eyD/seE4lBSTMP9Cy4zmVFNA/Kikg4ScX0j+En1yIuhnUP94VmS9NHNY/OIzV1t8e2D+SAhJ+ciHaP+x4TiUFJNw/Ru+KzJcm3j/QsuM5lRTgP/3tgY3eFeE/Kikg4ScX4j9XZL40cRjjP4SfXIi6GeQ/sdr62wMb5T/eFZkvTRzmPwtRN4OWHec/OIzV1t8e6D9lx3MqKSDpP5ICEn5yIeo/vz2w0bsi6z/seE4lBSTsPxm07HhOJe0/Ru+KzJcm7j9zKikg4SfvP9Cy4zmVFPA/ZtCy4zmV8D/97YGN3hXxP5QLUTeDlvE/Kikg4ScX8j/ARu+KzJfyP1dkvjRxGPM/7oGN3hWZ8z+En1yIuhn0Pxq9KzJfmvQ/sdr62wMb9T9I+MmFqJv1P94VmS9NHPY/dDNo2fGc9j8LUTeDlh33P6JuBi07nvc/OIzV1t8e+D/OqaSAhJ/4P2XHcyopIPk//ORC1M2g+T+SAhJ+ciH6Pygg4ScXovo/vz2w0bsi+z9WW397YKP7P+x4TiUFJPw/gpYdz6mk/D8ZtOx4TiX9P7DRuyLzpf0/Ru+KzJcm/j/cDFp2PKf+P3MqKSDhJ/8/Ckj4yYWo/z/QsuM5lRQAQJtBy47nVABAZtCy4zmVAEAyX5o4jNUAQP3tgY3eFQFAyHxp4jBWAUCUC1E3g5YBQF+aOIzV1gFAKikg4ScXAkD1twc2elcCQMBG74rMlwJAjNXW3x7YAkBXZL40cRgDQCLzpYnDWANA7oGN3hWZA0C5EHUzaNkDQISfXIi6GQRATy5E3QxaBEAavSsyX5oEQOZLE4ex2gRAsdr62wMbBUB8aeIwVlsFQEj4yYWomwVAE4ex2vrbBUDeFZkvTRwGQKmkgISfXAZAdDNo2fGcBkBAwk8uRN0GQAtRN4OWHQdA1t8e2OhdB0CibgYtO54HQG397YGN3gdAOIzV1t8eCEADG70rMl8IQM6ppICEnwhAmjiM1dbfCEBlx3MqKSAJQDBWW397YAlA/ORC1M2gCUDHcyopIOEJQJICEn5yIQpAXZH50sRhCkAoIOEnF6IKQPSuyHxp4gpAvz2w0bsiC0CKzJcmDmMLQFZbf3tgowtAIepm0LLjC0DseE4lBSQMQLcHNnpXZAxAgpYdz6mkDEBOJQUk/OQMQBm07HhOJQ1A5ELUzaBlDUCw0bsi86UNQHtgo3dF5g1ARu+KzJcmDkARfnIh6mYOQNwMWnY8pw5AqJtBy47nDkBzKikg4ScPQD65EHUzaA9ACkj4yYWoD0DV1t8e2OgPQNCy4zmVFBBANnpXZL40EECbQcuO51QQQAEJP7kQdRBAZtCy4zmVEEDMlyYOY7UQQDJfmjiM1RBAlyYOY7X1EED97YGN3hURQGO19bcHNhFAyHxp4jBWEUAuRN0MWnYRQJQLUTeDlhFA+dLEYay2EUBfmjiM1dYRQMRhrLb+9hFAKikg4ScXEkCQ8JMLUTcSQPW3BzZ6VxJAW397YKN3EkDARu+KzJcSQCYOY7X1txJAjNXW3x7YEkDxnEoKSPgSQFdkvjRxGBNAvSsyX5o4E0Ai86WJw1gTQIi6GbTseBNA7oGN3hWZE0BTSQEJP7kTQLkQdTNo2RNAHtjoXZH5E0CEn1yIuhkUQOpm0LLjORRATy5E3QxaFEC19bcHNnoUQBq9KzJfmhRAgISfXIi6FEDmSxOHsdoUQEsTh7Ha+hRAsdr62wMbFUAXom4GLTsVQHxp4jBWWxVA4jBWW397FUBI+MmFqJsVQK2/PbDRuxVAE4ex2vrbFUB4TiUFJPwVQN4VmS9NHBZARN0MWnY8FkCppICEn1wWQA9s9K7IfBZAdDNo2fGcFkDa+tsDG70WQEDCTy5E3RZApYnDWG39FkALUTeDlh0XQHEYq62/PRdA1t8e2OhdF0A8p5ICEn4XQKJuBi07nhdABzZ6V2S+F0Bt/e2Bjd4XQNLEYay2/hdAOIzV1t8eGECeU0kBCT8YQAMbvSsyXxhAaeIwVlt/GEDOqaSAhJ8YQDRxGKutvxhAmjiM1dbfGEAAAAAAAAAZQA==","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"1172"},"selection_policy":{"id":"1173"}},"id":"1159","type":"ColumnDataSource"},{"attributes":{},"id":"1155","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1142"},"glyph":{"id":"1144"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1145"},"selection_glyph":null,"view":{"id":"1147"}},"id":"1146","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1159"}},"id":"1163","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1134","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1120"}],"center":[{"id":"1123"},{"id":"1127"},{"id":"1157"}],"frame_height":275,"frame_width":375,"left":[{"id":"1124"}],"renderers":[{"id":"1146"},{"id":"1162"}],"title":{"id":"1149"},"toolbar":{"id":"1135"},"x_range":{"id":"1112"},"x_scale":{"id":"1116"},"y_range":{"id":"1114"},"y_scale":{"id":"1118"}},"id":"1111","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":" "},"renderers":[{"id":"1146"}]},"id":"1158","type":"LegendItem"},{"attributes":{"text":""},"id":"1149","type":"Title"},{"attributes":{"data_source":{"id":"1159"},"glyph":{"id":"1160"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1161"},"selection_glyph":null,"view":{"id":"1163"}},"id":"1162","type":"GlyphRenderer"},{"attributes":{},"id":"1173","type":"UnionRenderers"}],"root_ids":["1111"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1fe4a504-99f8-4fdb-8938-b3a42a9028d8","root_ids":["1111"],"roots":{"1111":"b2769380-627d-468f-b13b-d5267d43ff3e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();