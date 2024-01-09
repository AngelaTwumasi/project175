AFRAME.registerComponent("createModel",{
    init: async function() {

  var Model = await this.getModel();

  var barcode = object.keys(Model);
 
  barcode.map(barcode => {
    var element = Model[barcode];
     
    this.createBarcodes();
  });

};

createModel: function(model) {
    var barcodeValue = model.barcode_value;
    var modelUrl = model.model_url;
    var modelName = model.model_name;
    

    var scene = document.querySelector("a-scene");
     
    var marker = document.createElement("a-marker");

    marker.setAttribute("id", 'marker-${modelName}');
    marker.setAttribute("type", "barcode");
    marker.setAttribute("model_name", modelName);
    marker.setAttribute("value", barcodeValue);
    marker.setAttribute("markerhandler", {});

    scene.appendChild(marker);


    if (barcodeValue === 0) {
        var modelEl = document.createElement("a-entity");
        model.El.setAttribute("id", '${modelName}');
        modelEl.setAttribute("geometry", {
            primitive: "box",
            width: model.width,
            height: model.height
        });

        modelE1.setAttribute("position", model.position);
        modelE1.setAttribute("rotation", model.rotation);
        modelE1.setAttribute("material",{
            color: model.color
        });
        marker.appendChild(modelEl);

    } else {
        var modelEl = document.createElement("a-entity");
        modelEl.setAttribute("id", '${modelName}');
        modelEl.setAttribute("gltf-model", 'url(${modelUrl})');
        modelEl.setAttribute("scale", model.scale);
        modelEl.setAttribute("position", model.position);
        modelEl.setAttribute("rotation", model.rotation);
        marker.appendChild(modelEl);


    }
}

});