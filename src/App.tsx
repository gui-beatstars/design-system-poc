import { Button } from './components/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-8">Button Component Demo</h1>
        
        <div className="mb-12">
          <h2 className="mb-4">Primary Buttons - Large</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="large" label="Name me" iconLeft iconRight />
            <Button variant="primary" size="large" shape="pill" iconOnly iconRight />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">Primary Buttons - Medium</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="medium" label="Name me" iconLeft iconRight />
            <Button variant="primary" size="medium" shape="pill" iconOnly iconRight />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">Primary Buttons - Small</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="small" label="Name me" iconLeft iconRight />
            <Button variant="primary" size="small" shape="pill" iconOnly iconRight />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">Hover State</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="hover" size="large" label="Name me" iconLeft iconRight />
            <Button variant="hover" size="large" shape="pill" iconOnly iconRight />
            <Button variant="hover" size="medium" label="Name me" iconLeft iconRight />
            <Button variant="hover" size="small" label="Name me" iconLeft iconRight />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">Focus State</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="focus" size="large" label="Name me" iconLeft iconRight />
            <Button variant="focus" size="large" shape="pill" iconOnly iconRight />
            <Button variant="focus" size="medium" label="Name me" iconLeft iconRight />
            <Button variant="focus" size="small" label="Name me" iconLeft iconRight />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">Disabled State</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="large" label="Name me" iconLeft iconRight disabled />
            <Button variant="primary" size="large" shape="pill" iconOnly iconRight disabled />
            <Button variant="primary" size="medium" label="Name me" iconLeft iconRight disabled />
            <Button variant="primary" size="small" label="Name me" iconLeft iconRight disabled />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">Dark Variant</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="dark" size="large" label="Name me" iconLeft iconRight />
            <Button variant="dark" size="large" shape="pill" iconOnly iconRight />
            <Button variant="dark" size="medium" label="Name me" iconLeft iconRight />
            <Button variant="dark" size="small" label="Name me" iconLeft iconRight />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4">Interactive Example</h2>
          <div className="flex gap-4">
            <Button 
              variant="primary" 
              size="large" 
              label="Click me!" 
              iconLeft 
              iconRight 
              onClick={() => alert('Button clicked!')} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
