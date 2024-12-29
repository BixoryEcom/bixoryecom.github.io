import { RunwareService } from './runwareService';

export const generateHeroImage = async (apiKey: string) => {
  const runware = new RunwareService(apiKey);
  
  return await runware.generateImage({
    positivePrompt: "Modern minimalist business analytics dashboard, clean design, professional layout, muted colors, abstract data visualization, ecommerce success metrics, elegant UI, corporate style, high-end finish, subtle gradients, 8k ultra HD",
    model: "runware:100@1",
    width: 1920,
    height: 1080,
    numberResults: 1,
    outputFormat: "WEBP",
    CFGScale: 7.5,
    scheduler: "FlowMatchEulerDiscreteScheduler",
    strength: 0.9
  });
};