import TypeIcon from "../../../shared/TypeIcon/TypeIcon";

export default function IssueCard({type}: {type: 'memory' | 'battery' | 'ai' | 'chart' | 'money'}) {
    return (
      <li>
        <TypeIcon type={type} />
  
        <h5>AI 반도체 수요 급증, 국내 공급망 주목</h5>
          <p>NVIDIA 실적 호조에 따른 국내 HBM 및 패키징 업체 수혜 전망</p>
          <ul>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
            <li>
              <span>SK하이닉스</span>
              <span>+4.12%</span>
            </li>
          </ul>
          <div>
            <div>관련 뉴스 12건, 언급량 급증</div>
            <div>영향도 상</div>
          </div>
      </li>
    );
  };