from django.test import TestCase
from .models import Tag, Project


class TagModelUnitTestCase(TestCase):
    def setUp(self):
        self.tag = Tag.objects.create(
            name='Django',
        )

    def test_tag_model(self):
        data = self.tag
        self.assertIsInstance(data, Tag)


class ProjectModelUnitTestCase(TestCase):
    def setUp(self):
        self.tag = Tag.objects.create(name='Django')
        self.project = Project.objects.create(
            name='Lorem ipsum dolor sit amet',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quis odio id.',
            link='http://test.com/'
        )
        self.project.tags.add(self.tag)

    def test_project_model(self):
        data = self.project
        self.assertIsInstance(data, Project)
