import { PageLayout } from "../components/PageLayout";

export function ClubStory() {
  return (
    <PageLayout title="Our History" subtitle="In the shadow of the law...">
      <div className="space-y-6 text-[#2A1810]">
        <p>
          <span className="float-left mr-4 font-['Cinzel'] text-6xl leading-[0.8] text-[#8B5E3C]">I</span>
          n the winter of 1923, when the city was dry and the nights were long, The Velvet Archive opened its doors to those who knew where to knock.
        </p>
        <p>
          Constructed beneath the foundations of an old textile factory, our sanctuary was designed not just as a refuge from Prohibition, but as a cathedral to the art of conversation and the spirit of jazz. The walls are lined with velvet to dampen the sound, ensuring that what happens here, stays here.
        </p>
        <p>
          We are more than a speakeasy; we are a vault of memories. Every bottle on our shelf has a story, every chair has held a secret, and every song played on our stage is a testament to the enduring power of the night.
        </p>
        <div className="py-8 text-center italic text-[#8B5E3C]">
          "Silence is the price of entry. But the stories you leave with are yours to keep."
        </div>
        <p>
          The Archive is not for everyone. It is for the seekers, the dreamers, and those who understand that the best things in life are often hidden in plain sight.
        </p>
      </div>
    </PageLayout>
  );
}
