import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/MotionWrappers';

export function DataAnalysis() {
  return (
    <section id="data-analysis" className="section data-analysis-section">
      <FadeIn className="container">
        <h2>Exploring Data Analysis</h2>
        <p className="section-intro">
          I am interested in transforming raw information into useful insights and learning how programming and AI can support data-driven decision making.
        </p>
        <Card className="pipeline-card">
          <div className="pipeline">
            <span>DATA</span> &rarr; 
            <span>CLEAN</span> &rarr; 
            <span>ANALYZE</span> &rarr; 
            <span>FIND PATTERNS</span> &rarr; 
            <span>INSIGHTS</span>
          </div>
        </Card>
      </FadeIn>
    </section>
  );
}
