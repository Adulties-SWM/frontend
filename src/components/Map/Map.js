import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MedInfoModal } from '../MedInfoModal';

/* market 정적 데이터 */
var MARKER_WIDTH = 33, // 기본, 클릭 마커의 너비
  MARKER_HEIGHT = 36, // 기본, 클릭 마커의 높이
  OFFSET_X = 12, // 기본, 클릭 마커의 기준 X좌표
  OFFSET_Y = MARKER_HEIGHT, // 기본, 클릭 마커의 기준 Y좌표
  OVER_MARKER_WIDTH = 40, // 오버 마커의 너비
  OVER_MARKER_HEIGHT = 42, // 오버 마커의 높이
  OVER_OFFSET_X = 13, // 오버 마커의 기준 X좌표
  OVER_OFFSET_Y = OVER_MARKER_HEIGHT, // 오버 마커의 기준 Y좌표
  SPRITE_MARKER_URL =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markers_sprites2.png', // 스프라이트 마커 이미지 URL
  SPRITE_WIDTH = 126, // 스프라이트 이미지 너비
  SPRITE_HEIGHT = 146, // 스프라이트 이미지 높이
  SPRITE_GAP = 10; // 스프라이트 이미지에서 마커간 간격

var markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT), // 기본, 클릭 마커의 크기
  markerOffset = new kakao.maps.Point(OFFSET_X, OFFSET_Y), // 기본, 클릭 마커의 기준좌표
  overMarkerSize = new kakao.maps.Size(OVER_MARKER_WIDTH, OVER_MARKER_HEIGHT), // 오버 마커의 크기
  overMarkerOffset = new kakao.maps.Point(OVER_OFFSET_X, OVER_OFFSET_Y), // 오버 마커의 기준 좌표
  spriteImageSize = new kakao.maps.Size(SPRITE_WIDTH, SPRITE_HEIGHT); // 스프라이트 이미지의 크기

/* global kakao */
const Map = ({ markerList, currentTab }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [usedMarkers, setUsedMarkers] = useState([]);
  // MakrerImage 객체를 생성하여 반환하는 함수입니다
  // function createMarkerImage(markerSize, offset, spriteOrigin) {
  //   var markerImage = new kakao.maps.MarkerImage(
  //     SPRITE_MARKER_URL, // 스프라이트 마커 이미지 URL
  //     markerSize, // 마커의 크기
  //     {
  //       offset: offset, // 마커 이미지에서의 기준 좌표
  //       spriteOrigin: spriteOrigin, // 스트라이프 이미지 중 사용할 영역의 좌상단 좌표
  //       spriteSize: spriteImageSize, // 스프라이트 이미지의 크기
  //     },
  //   );
  //   return markerImage;
  // }
  const [map, setMap] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      let mapContainer = document.getElementById('map');
      let mapOptions = {
        center: new kakao.maps.LatLng(
          position.coords.latitude || 33.450705,
          position.coords.longitude || 126.570677,
        ),
        level: 7,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOptions);
      setMap(map);
      const center = map.getCenter();
      setTimeout(function () {
        map.relayout();
        map.setCenter(center);
      }, 0);
    });
  }, []);

  useEffect(() => {
    if (!map) return;
    if (usedMarkers && usedMarkers.length > 0) {
      usedMarkers.forEach(m => {
        m.setMap(null);
      });
    }
    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
    var bounds = new kakao.maps.LatLngBounds();
    // console.log(markerList);
    const newUsedMarkers = markerList.map(_marker => {
      const position = new kakao.maps.LatLng(_marker.lat, _marker.lon);
      const marker = new kakao.maps.Marker({ map, position });
      marker.hpid = _marker.hpid;
      bounds.extend(position);
      // 마커에 click 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        setSelectedMarker(marker);
      });
      return marker;
    });
    // console.log('currentTab = ' + currentTab);
    if (currentTab === '2') map.setBounds(bounds);

    setUsedMarkers(newUsedMarkers);
    /*
    positions.forEach((position, i) => {
      const gapX = MARKER_WIDTH + SPRITE_GAP;
      const originY = (MARKER_HEIGHT + SPRITE_GAP) * i;
      const overOriginY = (OVER_MARKER_HEIGHT + SPRITE_GAP) * i;
      const normalOrigin = new kakao.maps.Point(0, originY); // 스프라이트 이미지에서 기본 마커로 사용할 영역의 좌상단 좌표
      const clickOrigin = new kakao.maps.Point(gapX, originY); // 스프라이트 이미지에서 마우스오버 마커로 사용할 영역의 좌상단 좌표
      const overOrigin = new kakao.maps.Point(gapX * 2, overOriginY); // 스프라이트 이미지에서 클릭 마커로 사용할 영역의 좌상단 좌표
      addMarker(positions[i], normalOrigin, overOrigin, clickOrigin, i);
      function addMarker(
        position,
        normalOrigin,
        overOrigin,
        clickOrigin,
        index,
      ) {
        // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
        var normalImage = createMarkerImage(
            markerSize,
            markerOffset,
            normalOrigin,
          ),
          overImage = createMarkerImage(
            overMarkerSize,
            overMarkerOffset,
            overOrigin,
          ),
          clickImage = createMarkerImage(markerSize, markerOffset, clickOrigin);

        // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
          image: normalImage,
        });
        marker.hpid = position.hpid; // 의료기관 식별자 넣어야 함

        // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
        marker.normalImage = normalImage;

        // 마커에 mouseover 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
          // 마커의 이미지를 오버 이미지로 변경합니다
          if (!selectedMarker || selectedMarker !== marker) {
            marker.setImage(overImage);
          }
        });

        // 마커에 mouseout 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'mouseout', function () {
          // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
          // 마커의 이미지를 기본 이미지로 변경합니다
          if (!selectedMarker || selectedMarker !== marker) {
            marker.setImage(normalImage);
          }
        });

        // 마커에 click 이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
          // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
          // 마커의 이미지를 클릭 이미지로 변경합니다
          if (!selectedMarker || selectedMarker !== marker) {
            // 클릭된 마커 객체가 null이 아니면
            // 클릭된 마커의 이미지를 기본 이미지로 변경하고
            !!selectedMarker &&
              selectedMarker.setImage(selectedMarker.normalImage);

            // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
            marker.setImage(clickImage);
          }
          // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
          setSelectedMarker(marker);
          setModalStatus(!modalStatus);
        });
      }
    });
    */
  }, [map, markerList, modalStatus, selectedMarker]);

  useEffect(() => {
    if (!selectedMarker) return;
    // 모달 호출

    setModalStatus(true);
  }, [selectedMarker]);

  const ModalToggle = useCallback(() => {
    setModalStatus(!modalStatus);
  }, [modalStatus]);

  return (
    <MapContainer>
      <MapWrapper id="map"></MapWrapper>
      <MedInfoModal
        ModalToggle={ModalToggle}
        modalProps={{ visible: modalStatus }}
        selectedMarker={selectedMarker}
      />
    </MapContainer>
  );
};
const MapWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;
const MapContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;
export default Map;
