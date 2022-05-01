// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [50.55533757296666,137.0178744999999],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });

    var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point", // тип геометрии - точка
          coordinates: [50.55533757296666,137.0178744999999] // координаты точки
      }
    });

    var myPlacemark = new ymaps.Placemark([50.55533757296666,137.0178744999999], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/linux-point.png',
      iconImageSize: [48, 48],
      iconImageOffset: [-28, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}
