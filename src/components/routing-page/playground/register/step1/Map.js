import React, {useEffect} from 'react';
import client from "../../../../../lib/api/client";
import {useSelector} from "react-redux";

const {kakao} = window;

const Map = () => {
    const {token} = useSelector(({user}) => ({
        token: user.token
    }));


    useEffect(() => {
        client.get('/member/address', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(r => {
            const container = document.getElementById('myMap'),
                options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };

            const map = new kakao.maps.Map(container, options);

            var geocoder = new kakao.maps.services.Geocoder();

            geocoder.addressSearch(r.data.data.address, function (result, status) {

                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style="width:150px;text-align:center;padding:6px 0;">나의 집</div>'
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                }
            });

            const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

// 이미지 지도에 표시할 마커입니다
// 이미지 지도에 표시할 마커는 Object 형태입니다
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });

            marker.setMap(map);
        });
    }, [token]);

    return (
        <div id='myMap' style={{
            width: '500px',
            height: '500px'
        }} />
    );
};

export default Map;
