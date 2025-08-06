import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Question {
  id: string;
  text: string;
  type: 'text' | 'radio' | 'select';
  options?: string[];
}

const questions: Question[] = [
  {
    id: 'purpose',
    text: 'What is the main purpose of your website?',
    type: 'radio',
    options: ['Education', 'Business', 'Portfolio', 'Blog', 'E-commerce']
  },
  {
    id: 'style',
    text: 'What style do you prefer?',
    type: 'radio',
    options: ['Modern', 'Classic', 'Minimal', 'Creative', 'Professional']
  },
  {
    id: 'color',
    text: 'What is your preferred color scheme?',
    type: 'radio',
    options: ['Blue', 'Green', 'Red', 'Purple', 'Neutral']
  },
  {
    id: 'features',
    text: 'What features are most important to you?',
    type: 'radio',
    options: ['Contact Form', 'Image Gallery', 'Blog', 'Newsletter', 'Social Media']
  }
];

interface DesignAIProps {
  onComplete: (answers: Record<string, string>) => void;
}

const DesignAI: React.FC<DesignAIProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsGenerating(true);
      // Simulate AI processing
      setTimeout(() => {
        onComplete(answers);
        setIsGenerating(false);
      }, 2000);
    }
  };

  const renderQuestion = (question: Question) => {
    switch (question.type) {
      case 'radio':
        return (
          <RadioGroup
            onValueChange={handleAnswer}
            className="space-y-4"
          >
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'text':
        return (
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Type your answer..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAnswer((e.target as HTMLInputElement).value);
                }
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Let's Design Your Website</h2>
          <p className="text-gray-600">
            Answer a few questions and we'll create a perfect design for you.
          </p>
        </div>

        {isGenerating ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Generating your perfect design...</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                {questions[currentQuestion].text}
              </h3>
              {renderQuestion(questions[currentQuestion])}
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(prev => prev - 1)}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => handleAnswer('')}
                disabled={currentQuestion === questions.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DesignAI; 