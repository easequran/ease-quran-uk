export interface Ayah {
  numberInSurah: number;
  text: string;
}

export interface AyahWithTranslation extends Ayah {
  translation: string;
}

async function apiFetch(endpoint: string) {
  const res = await fetch(`https://api.alquran.cloud/v1${endpoint}`, {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error(`Quran API error: ${endpoint}`);
  return res.json();
}

export async function fetchSurahWithTranslation(surahNum: number): Promise<AyahWithTranslation[]> {
  const [arabic, english] = await Promise.all([
    apiFetch(`/surah/${surahNum}/quran-uthmani`),
    apiFetch(`/surah/${surahNum}/en.sahih`),
  ]);
  return arabic.data.ayahs.map((a: Ayah, i: number) => ({
    numberInSurah: a.numberInSurah,
    text: a.text,
    translation: english.data.ayahs[i].text,
  }));
}

export async function fetchSurahArabic(surahNum: number): Promise<Ayah[]> {
  const data = await apiFetch(`/surah/${surahNum}/quran-uthmani`);
  return data.data.ayahs;
}

export async function fetchAyahArabic(surah: number, ayah: number): Promise<string> {
  const data = await apiFetch(`/ayah/${surah}:${ayah}/quran-uthmani`);
  return data.data.text;
}
