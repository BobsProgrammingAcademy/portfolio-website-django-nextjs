from django.urls import path
from .views import TechnologyListView

urlpatterns = [
  path('', TechnologyListView.as_view()),
]
