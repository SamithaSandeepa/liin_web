import HeroSection from "@/components/sections/HeroSection";
import Section from "@/components/ui/Section";
import { CheckCircle, Users, Briefcase } from "lucide-react";

export const metadata = {
  title: "Terms of Service | LIIN",
  description: "Terms of Service for Lanka Impact Investing Network (LIIN)",
};

export default function TermsPage() {
  return (
    <>
      <HeroSection
        title="Terms of Service"
        subtitle="Guidelines for Impact Investors and Social Entrepreneurs"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920"
      />

      <Section id="terms-content">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed m-0">
              LIIN connects impact investors with social entrepreneurs to create positive social and environmental change. Please review the criteria below to understand our requirements and expectations.
            </p>
          </div>

          {/* Impact Investor Criteria */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase size={24} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary m-0">Impact Investor Criteria</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-medium mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An Impact Investor combines their values with their investments. Impact investing is not as simple as deciding to invest excess money in a Fixed Deposit or invest in real estate. It's about pairing your values with your investments. This is a social business concept and the investment should positively impact upon social and environmental issues.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Be committed for a dual return on your investment: a <strong>financial return</strong> plus a <strong>social and environmental impact</strong>.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "In addition to your direct financial investment, be willing to mentor and nurture the social entrepreneur. Assistance can range from help in developing the basics to identifying the right stakeholders and channels to take the product/service to the masses.",
                "Be a long term and risk averse investor. Many social enterprises require longer gestation periods for investors to reap the long term benefits of sustainability.",
                "Be willing to take membership of LIIN and abide by the principles and guidelines of impact investing.",
                "Be willing to work with a multitude of stakeholders in building social enterprises, as well as an impact investing ecosystem in Sri Lanka.",
                "Be willing to collaborate, partner and participate in joint initiatives and engagements with other like-minded impact investors.",
                "Be willing to promote, advocate and lobby for development of impact investing and social entrepreneur growth.",
                "Minimum investment should be Rs. 250,000 with an upper limit of Rs. 2,500,000 as equity, debt or a mix of both.",
                "Your investment should have been earned ethically without any negative environmental and social impacts.",
                "Your name shouldn't appear in the CRIB report as a defaulter and you should not have been found guilty in a court of law in Sri Lanka or Overseas for any criminal offense.",
              ].map((criteria, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-medium transition-shadow">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{criteria}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Entrepreneur Checklist */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Users size={24} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-secondary m-0">Checklist of a Social Entrepreneur</h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-medium mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Social Enterprises are focused on solving a specific social and/or environmental problem whilst being run like a business with products and services that are marketed to earn a revenue.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "The business should provide solutions to all kinds of social and environmental problems. They may be global problems or a problem that is limited to your own community. We encourage people to focus on the root-causes of social and environmental problems and propose innovative business solutions to solve them.",
                "The Product need not be fully developed. We accept businesses in the idea stage, startup stage as well as growth stage.",
                "Existing social enterprises can apply for investment to upscale their impact.",
                "Investments will be in the region of Rs. 250,000 to Rs. 2,500,000 based on the business plan.",
                "Should be willing to offer a percentage of ownership of your company to the investor or you can seek a loan with a periodic repayment plan, or a mix of the two.",
                "A thorough due diligence process will be conducted on your business if you secure investment.",
                "In order to apply, you need not have a registered company. However, you will have to register your company if you secure the investment.",
                "This is a social business program, hence, investors expect a financial return as well as a social-environmental impact on their investment.",
              ].map((criteria, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-medium transition-shadow">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-secondary" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{criteria}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 mt-8 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed m-0">
                <strong>About Our Focus:</strong> There is a new generation of budding social entrepreneurs with the sole mission of finding innovative and sustainable solutions to social and environmental problems through a business-like approach. Whether it be a rural farmer practicing sustainable organic cultivation or a group of young professionals creating a new platform for education and employment opportunities for the underprivileged communities or an entrepreneur building a mini hydro power plant—there is a new generation of businesses with the core purpose of creating social and environmental impact.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Questions?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our terms or requirements, please don't hesitate to contact us:
            </p>
            <div className="text-gray-700">
              <p>Email: <a href="mailto:accounts@liin.lk" className="text-primary hover:underline">accounts@liin.lk</a></p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
