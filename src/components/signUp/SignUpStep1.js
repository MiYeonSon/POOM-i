import React from 'react';
import styled from 'styled-components';
import ContentMiddleHeader from "../common/ContentMiddleHeader";
import SignUpBlock from "./SignUpBlock";

const UserAgreement = styled.div`
  & + & {
    box-sizing: border-box;
    margin: 3vw 0;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 55vw;
  height: 30vh;
  margin: 0.5vw 0;
  padding: 1vw;
  border: 1px solid #707070;
  overflow-y: scroll;
  line-height: 1.5vw;
`;

const Agree = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  font-size: 1vw;
`;


const SignUpStep1 = (props) => {
    /*
     * check 다시!
     */
    return (
        <SignUpBlock>
            <UserAgreement>
                <ContentMiddleHeader>이용약관 (필수)</ContentMiddleHeader>
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac fringilla mauris. Proin sit
                    amet
                    enim est. Mauris sed auctor lacus. Praesent dapibus, elit nec ultrices ornare, turpis neque
                    sodales
                    ligula, quis laoreet orci purus faucibus arcu. Nunc tincidunt mattis ex ornare varius. Mauris
                    malesuada nunc at diam interdum porttitor. Vivamus euismod hendrerit nisi. Cras vestibulum,
                    lorem
                    eget vestibulum placerat, enim sapien interdum arcu, a efficitur velit magna id metus. Nam non
                    purus
                    diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam rutrum urna metus, non
                    semper mi feugiat ut. Phasellus sagittis luctus odio et hendrerit. Vivamus vitae consequat
                    mauris.
                    Nullam semper tellus ac tellus bibendum efficitur. Vivamus nisi libero, vehicula sit amet
                    consequat
                    nec, malesuada eget metus.

                    Aenean porttitor blandit magna, condimentum viverra ipsum venenatis a. In non lacus non ex
                    pharetra
                    commodo. Nullam vel augue quam. Nunc fringilla, elit id dapibus sodales, ipsum metus finibus
                    est,
                    vitae euismod leo est eget tortor. Sed bibendum dictum lacus, vitae eleifend nulla bibendum nec.
                    Curabitur laoreet nulla sed ullamcorper bibendum. Mauris aliquet finibus tellus, vitae bibendum
                    nulla dignissim in. In elementum rhoncus ex sit amet pretium. Nulla facilisi. Donec maximus eu
                    dolor
                    id egestas. Nullam sem nibh, ultricies at lorem id, sagittis molestie neque. Donec in ultrices
                    sapien, eget lobortis nulla. Integer ornare dolor in turpis blandit luctus. Integer nec lobortis
                    odio, ultrices tempus augue. Nulla iaculis mauris eget turpis rhoncus porttitor.

                    Quisque egestas, mi vel molestie ullamcorper, mauris est volutpat nulla, rutrum blandit purus
                    turpis
                    non nulla. Pellentesque egestas eleifend consectetur. Curabitur turpis sem, facilisis sit amet
                    tincidunt at, tincidunt sit amet nisl. Cras tempor orci purus, sed faucibus risus porta in. Nam
                    volutpat leo nisi, nec ultricies sapien convallis ut. Vivamus sagittis, velit at iaculis tempus,
                    justo mauris cursus nunc, in vestibulum orci sapien mollis sapien. Ut vitae dapibus ligula.
                    Phasellus sed congue ante.

                    Morbi sed libero ultrices, egestas ipsum nec, maximus augue. Cras mattis lacinia mattis.
                    Curabitur
                    vulputate sapien consequat mi consequat, vitae tincidunt ante dictum. In hac habitasse platea
                    dictumst. Aenean gravida justo dapibus, elementum enim sed, pretium tortor. Nulla facilisi. Cras
                    orci leo, varius sit amet hendrerit ac, placerat a quam. In egestas ipsum et blandit hendrerit.
                    Praesent quis sagittis arcu, sit amet fermentum libero. Pellentesque lacinia lobortis fringilla.
                    Ut
                    sem ante, cursus id gravida sit amet, placerat pharetra sapien.

                    Duis imperdiet elit non est mattis, aliquet cursus orci ultricies. Donec eu nunc risus. Vivamus
                    vulputate bibendum quam gravida mollis. Vestibulum ultricies dui sed ante maximus, at gravida
                    sapien
                    consectetur. Nulla eget pulvinar ipsum. Aenean lacinia euismod nisl quis iaculis. Duis ac nunc
                    condimentum, iaculis risus vitae, lobortis nulla. Sed vulputate efficitur ex, eget maximus dolor
                    placerat sodales. Nullam tortor lacus, tristique vel risus in, rutrum pulvinar nunc. Phasellus
                    at
                    feugiat libero, sed venenatis odio. In ornare pretium pellentesque. Etiam blandit, nisi ut
                    pulvinar
                    ultricies, lectus nunc ultrices diam, a elementum ligula mauris faucibus nisl. Nulla
                    sollicitudin at
                    nisl ac mattis. Integer ultrices venenatis dictum.
                </Content>
                <Agree>
                    <label htmlFor="agree01">
                        <input type="checkbox" id={"agree01"} name={"agree"} />약관을 충분히 이해하였으며 동의합니다.</label>
                </Agree>
            </UserAgreement>

            <UserAgreement>
                <ContentMiddleHeader>개인정보 처리방침 (필수)</ContentMiddleHeader>
                <Content>
                    [ POOM-i ]('https://www.poom-i.com'이하 'POOM-i')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한
                    고충을
                    신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.

                    ○ 이 개인정보처리방침은 2021년 8월 1부터 적용됩니다.


                    제1조(개인정보의 처리 목적) [ POOM-i ]('https://www.poom-i.com'이하 'POOM-i')은(는) 다음의 목적을 위하여 개인정보를 처리합니다.
                    처리하고
                    있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                    예정입니다.
                    1. 홈페이지 회원가입 및 관리
                    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적으로 개인정보를 처리합니다.
                    2. 재화 또는 서비스 제공
                    서비스 제공, 본인인증을 목적으로 개인정보를 처리합니다.
                    제2조(개인정보의 처리 및 보유 기간)
                    ① [ POOM-i ]은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를
                    처리·보유합니다.
                    ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                    제3조(개인정보의 제3자 제공)
                    ① [ POOM-i ]은(는) 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」
                    제17조 및
                    제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                    ② [ POOM-i ]은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
                    1
                    개인정보를 제공받는 자 : POOM-i 회원 간
                    제공받는 자의 개인정보 이용목적 : 이메일, 휴대전화번호, 자택주소, 로그인ID, 성별, 생년월일, 이름, 신체정보
                    제공받는 자의 보유.이용기간: 3년
                    제4조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)
                    ① 정보주체는 POOM-i에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                    ② 제1항에 따른 권리 행사는POOM-i에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며
                    POOM-i은(는)
                    이에 대해 지체 없이 조치하겠습니다.
                    ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)”
                    별지
                    제11호 서식에 따른 위임장을 제출하셔야 합니다.
                    ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
                    ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                    ⑥ POOM-i은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                    제5조(처리하는 개인정보의 항목 작성)
                    ① [ POOM-i ]은(는) 다음의 개인정보 항목을 처리하고 있습니다.
                    1[ 홈페이지 회원가입 및 관리 ]
                    필수항목 : 이메일, 휴대전화번호, 자택주소, 비밀번호 질문과 답, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 학력
                    선택항목 :
                    제6조(개인정보의 파기)
                    ① [ POOM-i ] 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                    ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를
                    별도의
                    데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                    1. 법령 근거 :
                    2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
                    ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                    1. 파기절차
                    [ POOM-i ] 은(는) 파기 사유가 발생한 개인정보를 선정하고, [ POOM-i ] 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
                    2. 파기방법
                    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
                    종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다
                    제7조(개인정보의 안전성 확보 조치)
                    [ POOM-i ]은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                    1. 정기적인 자체 감사 실시
                    개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
                    2. 개인정보 취급 직원의 최소화 및 교육
                    개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
                    3. 해킹 등에 대비한 기술적 대책
                    [ POOM-i ]('POOM-i')은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터
                    접근이
                    통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
                    4. 개인정보의 암호화
                    이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는
                    등의
                    별도 보안기능을 사용하고 있습니다.
                    5. 개인정보에 대한 접근 제한
                    개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여
                    외부로부터의
                    무단 접근을 통제하고 있습니다.
                    6. 문서보안을 위한 잠금장치 사용
                    개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
                    제8조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)
                    ① POOM-i 은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. ② 쿠키는 웹사이트를
                    운영하는데
                    이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적 : 이용자가
                    방문한
                    각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다. 나. 쿠키의 설치•운영 및
                    거부
                    : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이
                    발생할 수
                    있습니다.
                    제9조 (개인정보 보호책임자)
                    ① POOM-i 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
                    보호책임자를
                    지정하고 있습니다.
                    ▶ 개인정보 보호책임자
                    성명 :김민기
                    직책 :대표
                    직급 :대표
                    연락처 :01075976959, 20161715@edu.hanbat.ac.kr,
                    ※ 개인정보 보호 담당부서로 연결됩니다.
                    ▶ 개인정보 보호 담당부서
                    부서명 :POOM-i 기술과
                    담당자 :김민기
                    연락처 :01075976959, 20161715@edu.hanbat.ac.kr,
                    ② 정보주체께서는 POOM-i 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
                    담당부서로
                    문의하실 수 있습니다. POOM-i 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                    제10조(가명정보의 처리)
                    [ POOM-i ] 은(는) 다음과 같은 목적으로 가명정보를 처리하고 있습니다.
                    ▶ 가명정보의 처리 목적
                    - 직접작성 가능합니다.
                    ▶ 가명정보의 처리 및 보유기간
                    - 직접작성 가능합니다.
                    ▶ 가명정보의 제3자 제공에 관한 사항(해당되는 경우에만 작성)
                    - 직접작성 가능합니다.
                    ▶ 가명정보 처리의 위탁에 관한 사항(해당되는 경우에만 작성)
                    - 직접작성 가능합니다.
                    ▶ 가명처리하는 개인정보의 항목
                    - 직접작성 가능합니다.
                    ▶ 법 제28조의4(가명정보에 대한 안전조치 의무 등)에 따른 가명정보의 안전성 확보조치에 관한 사항
                    - 직접작성 가능합니다.
                    제11조(개인정보 열람청구)
                    정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
                    [ POOM-i ]은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
                    ▶ 개인정보 열람청구 접수·처리 부서
                    부서명 : POOM-i 기술과
                    담당자 : 김민기
                    연락처 : 01075976959, 20161715@edu.hanbat.ac.kr,
                    제12조(권익침해 구제방법)
                    정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
                    개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                    1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
                    2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                    3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
                    4. 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)
                    「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분
                    또는
                    부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                    ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
                    제13조(개인정보 처리방침 변경)
                    ① 이 개인정보처리방침은 2021년 8월 1부터 적용됩니다.
                    ② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
                    예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)
                    예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)
                    예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)
                </Content>

                <Agree>
                    <label htmlFor="agree02">
                        <input type="checkbox" id={"agree02"} name={"agree"} />개인정보 처리 방침에 대한 안내를 충분히 이해하였으며 동의합니다.
                    </label>
                </Agree>
            </UserAgreement>
        </SignUpBlock>
    );

};

export default SignUpStep1;
