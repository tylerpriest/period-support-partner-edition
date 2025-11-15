import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from '../../components/Card';
import { Modal } from '../../components/Modal';
import { colors, spacing, typography } from '../../styles/tokens';
import { EDUCATIONAL_ARTICLES, type Article } from '../../data/educationalArticles';

export default function LearnScreen() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'basics', label: 'Basics' },
    { id: 'science', label: 'Science' },
    { id: 'support', label: 'Support' },
    { id: 'health', label: 'Health' },
    { id: 'communication', label: 'Communication' },
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? EDUCATIONAL_ARTICLES
      : EDUCATIONAL_ARTICLES.filter((article) => article.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryChip,
              selectedCategory === category.id && styles.categoryChipActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
            accessible={true}
            accessibilityRole="button"
            accessibilityState={{ selected: selectedCategory === category.id }}
          >
            <Text
              style={[
                styles.categoryChipText,
                selectedCategory === category.id && styles.categoryChipTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Articles List */}
      <ScrollView style={styles.articlesContainer} contentContainerStyle={styles.articlesContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Educational Articles</Text>
          <Text style={styles.subtitle}>
            Learn about the cycle, health, and how to provide better support
          </Text>
        </View>

        <View style={styles.articlesList}>
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              onPress={() => setSelectedArticle(article)}
              style={styles.articleCard}
            >
              <View style={styles.articleHeader}>
                <Text style={styles.articleCategory}>{getCategoryIcon(article.category)}</Text>
                <Text style={styles.articleReadTime}>{article.readTime} min read</Text>
              </View>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleSummary}>{article.summary}</Text>
              <View style={styles.articleTags}>
                {article.tags.slice(0, 3).map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>

      {/* Article Modal */}
      {selectedArticle && (
        <Modal
          visible={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.title}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalMeta}>
              <Text style={styles.modalCategory}>
                {getCategoryIcon(selectedArticle.category)} {selectedArticle.category}
              </Text>
              <Text style={styles.modalReadTime}>{selectedArticle.readTime} min read</Text>
            </View>

            <Text style={styles.modalSummary}>{selectedArticle.summary}</Text>

            <View style={styles.modalDivider} />

            {/* Basic markdown rendering - split by headers and paragraphs */}
            <Text style={styles.modalArticleContent}>{selectedArticle.content}</Text>
          </View>
        </Modal>
      )}
    </View>
  );
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    basics: '📖',
    science: '🔬',
    support: '🤝',
    health: '⚕️',
    communication: '💬',
  };
  return icons[category] || '📄';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[100],
  },
  categoryScroll: {
    maxHeight: 60,
    backgroundColor: colors.neutral[50],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  categoryContainer: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  categoryChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    backgroundColor: colors.neutral[100],
    borderWidth: 1,
    borderColor: colors.neutral[300],
  },
  categoryChipActive: {
    backgroundColor: colors.terracotta[500],
    borderColor: colors.terracotta[500],
  },
  categoryChipText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    fontWeight: '600' as any,
    color: colors.neutral[700],
  },
  categoryChipTextActive: {
    color: colors.neutral[50],
  },
  articlesContainer: {
    flex: 1,
  },
  articlesContent: {
    padding: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 24,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[600],
    lineHeight: 20,
  },
  articlesList: {
    gap: spacing.md,
  },
  articleCard: {
    marginBottom: 0,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  articleCategory: {
    fontSize: 24,
  },
  articleReadTime: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 12,
    color: colors.neutral[600],
    fontWeight: '500' as any,
  },
  articleTitle: {
    fontFamily: typography.fontFamily.serif,
    fontSize: 18,
    fontWeight: '600' as any,
    color: colors.neutral[900],
    marginBottom: spacing.sm,
  },
  articleSummary: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    lineHeight: 20,
    color: colors.neutral[700],
    marginBottom: spacing.sm,
  },
  articleTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  tag: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    backgroundColor: colors.sage[100],
    borderRadius: 4,
  },
  tagText: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 11,
    color: colors.sage[800],
    fontWeight: '500' as any,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  modalContent: {
    paddingBottom: spacing.lg,
  },
  modalMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  modalCategory: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 14,
    color: colors.neutral[700],
    fontWeight: '500' as any,
    textTransform: 'capitalize',
  },
  modalReadTime: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 12,
    color: colors.neutral[600],
  },
  modalSummary: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    lineHeight: 22,
    color: colors.neutral[700],
    marginBottom: spacing.md,
    fontStyle: 'italic',
  },
  modalDivider: {
    height: 1,
    backgroundColor: colors.neutral[200],
    marginVertical: spacing.md,
  },
  modalArticleContent: {
    fontFamily: typography.fontFamily.sans,
    fontSize: 15,
    lineHeight: 24,
    color: colors.neutral[800],
  },
});
