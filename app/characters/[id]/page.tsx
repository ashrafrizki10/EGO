import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/SectionHeading';
import { characters } from '@/data/characters';
import { CharacterDetails } from '@/components/CharacterDetails';

interface CharacterPageProps {
  params: { id: string };
}

import type { Metadata } from 'next';

export async function generateMetadata({ params }: CharacterPageProps): Promise<Metadata> {
  const character = characters.find((item) => item.id === params.id);
  
  if (!character) {
    return {
      title: 'Character Not Found',
    };
  }

  return {
    title: `${character.name} - EGO FLOW`,
    description: character.description,
    openGraph: {
      title: `${character.name} | EGO FLOW Database`,
      description: character.description,
      images: [
        {
          url: character.image,
          width: 800,
          height: 600,
          alt: character.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${character.name} | EGO FLOW Database`,
      description: character.description,
      images: [character.image],
    },
  };
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const character = characters.find((item) => item.id === params.id);

  if (!character) {
    notFound();
  }

  return (
    <section className="space-y-10">
      <SectionHeading title={character.name} description={character.description} />
      <CharacterDetails character={character} />
    </section>
  );
}
