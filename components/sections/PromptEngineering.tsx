import { Card } from '@/components/ui/Card';

export function PromptEngineering() {
  return (
    <section id="prompt-engineering" className="section prompt-engineering-section">
      <div className="container">
        <h2>Exploring Prompt Engineering</h2>
        <p className="section-intro">
          I am interested in understanding how well-designed prompts can improve the quality and usefulness of AI-generated results.
        </p>
        <Card className="pipeline-card">
          <div className="pipeline">
            <span>USER GOAL</span> &rarr; 
            <span>PROMPT</span> &rarr; 
            <span>AI MODEL</span> &rarr; 
            <span>OUTPUT</span> &rarr; 
            <span>REFINE</span>
          </div>
        </Card>
      </div>
    </section>
  );
}
