import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Em say rồi',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s3/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzlmDf01WH1tsZRtrfI1aUCRT_O2mDGHOzlZ8fTL5OGY3lPY05I1nRL9OR80bv1HDvkn84nL4f1zMZJpNyJMmovByADE5aO3B0lmuqnHn0JudlDYcj15X3hAf-FFKj44RWXduSmIH0UitN9rIr6KXo_CvlUPWGRBwGqb-bWJqPbitdRhd4F22_nUTMkTWy6CF1Xslzu3bSrgpBPg2uF2p3uPj2gVrmCPQjXXAWiMq5ix6M8xdv81ZYwCzUqJmSSIPudrxNFnQzoNR1cg9IPw2GUCdq&cv=1&size=thumb/240_240' 
        },
        {
            id: 2,
            name: 'Anh làm gì sai',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzgmDv0K0H8tplVXLTG11E2Fjo815S67um_Y8bOLG4VtMxPrLbKKnYD8zB6MbWLIePea8zfKXvFhMw7moSL3mBXAPQ3Pbz50kGfbuDZI4uKvoZ1Y3CJIHIxBvNPRqL74Rvuduax4K56l7cUZY9A1KUmFyo5QGXCTAiumB9lGn4-l7MCzNu3L7JvTThrBmC2RFeysFjpL0DjzckBftOBL3xnOTgaSm44FAPls_1t1HuqjplNjYKMMM3XROZi45eBOkp0GA5ytcYZxDJYP7wXAxwtYAKoFJ9z&cv=1&size=thumb/240_240' 
        },
        {
            id: 3,
            name: 'Cô độc vương',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044GDzlmDP010H1tshNtLO71HVKEepQLbi2GuLcsjHJNbL9rJAEqWHSL4ZIAzMM1L0I6jbWbzysMXaVycQ0atWT25A-8P7JFLTDKkWXmDDhJquRwY-SX6fEGaovSvdRFHr5HkXmdD5j7n98wIIOrNSN0npbOihUF5LAB_vbnkaw7XTbwIYAhYjUKo-hADkk8ru2CF0_swvu0mSp_MpSh7GD1cVyCDwhT5nNDg0nt_bp31ezipBJlo4VNMdbP8pb5lxJQs8tsNvB3HA6FUG_YUFQzWjnzsJLf8orIMa&cv=1&size=thumb/240_240' 
        }
    ]
    return (
        <div>
            <h2>Radio nổi bật</h2>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumFeature;