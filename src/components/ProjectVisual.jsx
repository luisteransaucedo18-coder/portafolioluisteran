import { useLanguage } from "../i18n/LanguageContext";
export function ProjectVisual({ index }) {
  const {
    copy: { ui },
  } = useLanguage();
  return (
    <div
      className={`project-visual visual-${index}`}
      role="img"
      aria-label={`${ui.concept}: ${[ui.codeTitle, ui.scene360, ui.sceneTeam][index]}`}
    >
      <div className="visual-top" aria-hidden="true">
        <span>LT / 0{index + 1}</span>
        <span>{ui.concept} ↗</span>
      </div>
      {index === 0 && (
        <div className="game-scene" aria-hidden="true">
          <div className="game-tile tile-one">
            ♜<small>PYTHON</small>
          </div>
          <div className="game-tile tile-two">
            ✦<small>FLASK</small>
          </div>
          <div className="game-tile tile-three">
            ⌘<small>{ui.logic}</small>
          </div>
          <div className="game-path" />
        </div>
      )}
      {index === 1 && (
        <div className="building-scene" aria-hidden="true">
          <div className="building building-a" />
          <div className="building building-b" />
          <div className="building building-c" />
          <div className="viewer-ring">360°</div>
        </div>
      )}
      {index === 2 && (
        <div className="team-scene" aria-hidden="true">
          <span className="team-line" />
          <div className="team-node">&lt;/&gt;</div>
          <div className="team-node">{}</div>
          <div className="team-node">✓</div>
        </div>
      )}
      <div className="visual-bottom" aria-hidden="true">
        {[ui.codeTitle, ui.scene360, ui.sceneTeam][index]}
      </div>
    </div>
  );
}
