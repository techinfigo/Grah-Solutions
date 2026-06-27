import { ProcessStep as ProcessStepType } from '../types';
import { motion } from 'motion/react';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-secondary text-accent rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg z-10">
        {step.number}
      </div>
      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
      <p className="text-gray-600 max-w-xs">{step.description}</p>
      
      {/* Connector line for desktop */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-secondary -z-0" />
      )}
    </motion.div>
  );
}
