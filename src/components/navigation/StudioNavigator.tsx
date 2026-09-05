import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, ChevronRight, GraduationCap, Layers3, Sigma, Atom } from "lucide-react";
import { studioSubjects, type TaxonomyNode } from "../../content/studioTaxonomy";

interface Props {
  onOpenContent: (contentId: string, trail: TaxonomyNode[]) => void;
  initialTrailIds?: string[];
}

const iconFor = (id: string) => {
  if (id === "physics") return Atom;
  if (id === "mathematics") return Sigma;
  return Layers3;
};

const kinematicsParts: TaxonomyNode[] = [1, 2, 3, 4, 5, 6].map((part) => ({ id: `part-${part}`, label: `Part ${part}`, description: `Kinematics lecture content — Part ${part}.`, contentId: `part-${part}` }));

const resolveTrail = (ids: string[] = []) => {
  const result: TaxonomyNode[] = [];
  let options = studioSubjects;

  for (const id of ids) {
    const node = options.find((item) => item.id === id);
    if (!node) break;
    result.push(node);
    options = node.id === "kinematics" ? kinematicsParts : node.children ?? [];
  }

  return result;
};

export const StudioNavigator: React.FC<Props> = ({ onOpenContent, initialTrailIds = [] }) => {
  const [trail, setTrail] = useState<TaxonomyNode[]>(() => resolveTrail(initialTrailIds));
  const current = trail[trail.length - 1];
  const options = current?.id === "kinematics" ? kinematicsParts : current?.children ?? studioSubjects;
  const Icon = current ? iconFor(current.id) : GraduationCap;

  useEffect(() => {
    setTrail(resolveTrail(initialTrailIds));
  }, [initialTrailIds.join("/")]);

  const selectNode = (node: TaxonomyNode) => {
    const nextTrail = [...trail, node];
    setTrail(nextTrail);
    if (node.contentId) onOpenContent(node.contentId, nextTrail);
  };
  const goBack = () => setTrail((value) => value.slice(0, -1));
  const goHome = () => setTrail([]);
  const breadcrumb = useMemo(() => trail.map((node) => node.label), [trail]);

  return (
    <section className="studio-navigator" aria-label="Lecture Studio subject navigation">
      <header className="navigator-header">
        <div className="navigator-brand">
          <div className="navigator-mark"><BookOpen size={20} /></div>
          <div><p className="navigator-eyebrow">DHD NEXUS</p><h1>Lecture Studio</h1></div>
        </div>
        <div className="navigator-purpose">Choose a subject area to begin</div>
      </header>

      <div className="navigator-breadcrumbs" aria-label="Navigation path">
        <button onClick={goHome} className={trail.length === 0 ? "current" : ""}>Lecture Studio</button>
        {breadcrumb.map((label, index) => (
          <React.Fragment key={`${label}-${index}`}><ChevronRight size={14} /><button className={index === trail.length - 1 ? "current" : ""} onClick={() => setTrail((value) => value.slice(0, index + 1))}>{label}</button></React.Fragment>
        ))}
      </div>

      <div className="navigator-layout">
        <aside className="navigator-rail">
          <div className="navigator-rail-label">SUBJECT AREA</div>
          {studioSubjects.map((subject) => { const SubjectIcon = iconFor(subject.id); return <button key={subject.id} className={trail[0]?.id === subject.id ? "active" : ""} onClick={() => setTrail([subject])}><SubjectIcon size={18} /><span>{subject.label}</span></button>; })}
        </aside>

        <main className="navigator-columns">
          {trail.length === 0 ? (
            <div className="navigator-welcome">
              <Icon size={28} /><span className="navigator-kicker">WELCOME TO THE STUDIO</span>
              <h2>What would you like to study?</h2>
              <p>Select a subject to explore its curriculum. The navigation progressively reveals the available areas, domains, and topics.</p>
              <div className="subject-cards">
                {studioSubjects.map((subject) => { const SubjectIcon = iconFor(subject.id); return <button key={subject.id} className="subject-card" onClick={() => selectNode(subject)}><div className="subject-card-icon"><SubjectIcon size={24} /></div><div><strong>{subject.label}</strong><p>{subject.description}</p></div><ArrowRight size={18} /></button>; })}
              </div>
            </div>
          ) : (
            <div className="navigator-stage">
              <div className="navigator-stage-heading"><div><span className="navigator-kicker">{trail.length === 1 ? "SUBJECT" : "CURRICULUM"}</span><h2>{current.label}</h2>{current.description && <p>{current.description}</p>}</div><button className="navigator-back" onClick={goBack}><ArrowLeft size={16} /> Back</button></div>
              <div className="navigator-option-grid">
                {options.length > 0 ? options.map((node) => <button key={node.id} className="navigator-option" onClick={() => selectNode(node)}><div><strong>{node.label}</strong>{node.description && <p>{node.description}</p>}{node.contentId && <span className="navigator-available"><BookOpen size={13} /> Available in Lecture Studio</span>}</div><ChevronRight size={18} /></button>) : <div className="navigator-empty"><span>CONTENT NOT YET PUBLISHED</span><p>This area is part of the Studio taxonomy and is ready for future lessons.</p></div>}
              </div>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};
