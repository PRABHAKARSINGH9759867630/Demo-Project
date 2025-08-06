import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { sendEmail } from '@/utils/email';

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast.success('Form submitted successfully! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to submit form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Admissions - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Learn about the admissions process at GD Goenka Public School, Rudrapur. Application procedures, required documents, and admission timeline." />
      </Helmet>

      <Header />
      <main>
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl max-w-3xl mx-auto">Begin your child's journey to excellence at GD Goenka Public School, Rudrapur</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-school-primary">Welcome to Admissions</h2>
                <p className="mb-6 text-gray-700">
                  Thank you for considering GD Goenka Public School, Rudrapur for your child's education. We are committed to providing a nurturing environment where students can develop academically, socially, and emotionally.
                </p>
                <p className="mb-6 text-gray-700">
                  Our admission process is designed to be straightforward and supportive. We welcome families who share our educational philosophy and are looking for a school that values academic excellence, character development, and holistic growth.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button asChild className="bg-school-primary hover:bg-school-dark">
                    <Link to="/admissions/process">
                      Admission Process 
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary/10">
                    <Link to="/admissions/enquiry">
                      Submit an Enquiry
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800" 
                  alt="Students at GD Goenka" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Admission Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="bg-school-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-center text-school-primary">Application</h3>
                <p className="text-gray-700 text-center">
                  Complete the online application form or visit our admissions office to obtain and submit a physical application.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="bg-school-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-center text-school-primary">Assessment</h3>
                <p className="text-gray-700 text-center">
                  Students undergo an age-appropriate assessment to determine their educational needs and readiness.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="bg-school-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-center text-school-primary">Interview</h3>
                <p className="text-gray-700 text-center">
                  Parents and students are invited for an interview to understand expectations and discuss educational goals.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/admissions/process" className="inline-flex items-center text-school-primary hover:text-school-dark font-medium">
                View Complete Process
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Eligibility & Requirements</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-school-accent">Age Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Nursery</p>
                      <p className="text-gray-700">Children must be at least 2.5 years old by March 31st of the academic year.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">KG</p>
                      <p className="text-gray-700">Children must be at least 3.5 years old by March 31st of the academic year.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Class 1 and above</p>
                      <p className="text-gray-700">Age requirements vary based on the class. Please contact our admissions office for specific details.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-school-accent">Required Documents</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700">Completed application form</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700">Birth certificate of the child</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700">Passport-sized photographs of the child and parents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700">Transfer Certificate (TC) from the previous school (for Class 1 and above)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700">Report cards from the previous school (for Class 1 and above)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700">Address proof of parents/guardians</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-school-primary" />
                    </div>
                    <div>
                      <p className="text-gray-700">Aadhar card of the child (if available)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-school-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Begin your child's educational journey at GD Goenka Public School, Rudrapur today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/admissions/registration">
                  Apply Online
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Admissions Office
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Submit an Enquiry</h2>
            
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                    placeholder="Please provide any additional information or questions"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admissions;
